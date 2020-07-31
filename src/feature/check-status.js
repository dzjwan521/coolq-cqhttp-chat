const axios = require("axios");
//获取服务器状态
let checkStatus = function (text) {
  return new Promise((resolve, reject) => {
    axios
      .get("http://spider.jx3box.com/jx3servers")
      .then(function (res) {
        let obj,arr=res.data.data
        arr.forEach(element => {
          if(element.serverName==text){
            obj=element
          }
          
        });
        if(obj){
          let msg = obj.connectState?`${text}已开服`:`${text}维护中`
          resolve(msg);
        }
        resolve('未搜索到服务器信息');
      })
      .catch(function (error) {
        console.log(error);
        resolve(reject);
      });
  });
};

module.exports = checkStatus;
