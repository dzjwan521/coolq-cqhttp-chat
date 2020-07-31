const uuid = require('uuid');
var md5 = require('md5-node');
const Qs = require('qs');
const axios = require('axios');
const appkey = 'vwO62X58ZjxwMHuX';//请填写appkey
const appid = '2154836018';//请填写appid
const crypto = require('crypto')
const querystring = require('querystring')
function tencentAlp(message) {
    return new Promise(function (resolve, reject) {
        let map = new Map();
        let random_str = uuid.v4();
        if (random_str.length > 32) {//随机字符串32位上限
            random_str = random_str.slice(0, 31)
        }
        map.set("app_id", appid);
        map.set("time_stamp", Math.round(new Date().getTime() / 1000));
        map.set("nonce_str", random_str);
        map.set("session", '111');
        map.set("question", message.replace(/\[(\S*)]/g, ''));
        map.set("sign", "");
        map.set("sign", getReqSign(map, appkey));
        let data = {
            app_id: map.get('app_id'),
            time_stamp: map.get('time_stamp'),
            nonce_str: map.get('nonce_str'),
            sign: map.get('sign'),
            session: map.get('session'),
            question: map.get('question'),
        };
        axios({
            url: 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',
            method: 'post',
            data: Qs.stringify(data)
        }).then(res => {
            console.log(res.data);
            let reply = res.data.data.answer;
            resolve(reply);
        }).catch(err => {
            reject(err);
        });
        return 0;
    })
}
function getReqSign(params, appkey) {
    //map转obj
    let obj = Object.create(null);
    for (let [k, v] of params) {
        obj[k] = v;
    }
    console.log(obj)
    let parList, sign, str = '';
    // 1. 字典升序排序
    parList = ksort(obj);
    // 2. 拼按URL键值对
    parList.map((item) => {
        if (item.value !== '') {
            str += `${item.key}=${querystring.escape(item.value)}&`;
        }
    });
    // 处理URL编码和java、PHP不一致的问题
    str = str.replace(/%20/g, '+')
    // 4. MD5运算+转换大写，得到请求签名
    sign = crypto.createHash('md5').update(str + `app_key=${appkey}`, 'utf-8').digest('hex').toUpperCase()
    console.log(sign)
    return sign
   
}

function ksort(params) {
    let arrayList = [],
        sort = (a, b) => {
            return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
        };
    for (let key in params) {
        arrayList.push({
            "key": key,
            "value": params[key]
        })
    }
    return arrayList.sort(sort)
}

module.exports = {
    tencentAlp
}