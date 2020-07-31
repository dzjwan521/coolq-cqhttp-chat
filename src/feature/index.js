const checkStatus = require("./check-status");
const checkGlod = require("./check-glod");
const checkFood = require("./check-food");
const checkMacro = require("./check-macro");
const checkMedicine = require("./check-medicine");
const app = require("../bot");

let feature =  async function (context) {
  let msg = context.message;
  let arr = msg.split("#");
  let cmd = arr[0]; //指令
  let text = arr[1]; //内容
  console.log(msg)
  let returnMessage = "&*……&*……#¥*……@#¥）（*@（&#&¥（@";
  switch (cmd) {
    case "宏":
      returnMessage = checkMacro(text);
      break;
    case "帮会食堂":
      returnMessage = checkFood();
      break;
    case "开服":
      try {
        if(!text){
          text = "风月同天"
        }
        returnMessage =  await checkStatus(text);
      } catch (error) {
        console.log(error)
      }
    
      break;
    case "金价":
      try {
        let obj = await checkGlod();
        returnMessage = `均价：${obj.average}\n最高价：${obj.highest}\n最低价：${obj.lowest}\n`
      } catch (error) {
        console.log(error)
        
      }
      break;
    case "小药":
      returnMessage =  checkMedicine();
      break;
  }

  app.send_msg(context, returnMessage);
};

module.exports = feature;
