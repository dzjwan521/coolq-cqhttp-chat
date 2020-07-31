const checkStatus = require("./check-status");
const checkGlod = require("./check-glod");
const checkFood = require("./check-food");
const checkMacro = require("./check-macro");
const checkMedicine = require("./check-medicine");
const app = require("../bot");

let feature = async function (context) {
  let msg = context.message;
  let arr = msg.split("#");
  let cmd = arr[0]; //指令
  let text = arr[1]; //内容

  let returnMessage = "&*……&*……#¥*……@#¥）（*@（&#&¥（@";
  switch (cmd) {
    case "宏":
      returnMessage = checkMacro(text);
      break;
    case "帮会食堂":
      returnMessage = checkFood();
      break;
    case "开服":
      returnMessage = await checkStatus();
      break;
    case "金价":
      returnMessage = await checkGlod();
      break;
    case "小药":
      returnMessage = await checkMedicine();
      break;
  }

  app.send_msg(context, returnMessage);
};

module.exports = feature;
