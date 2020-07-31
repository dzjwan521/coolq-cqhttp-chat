const axios = require("axios");
//获取服务器状态
let checkStatus = function (text = "风月同天") {
  return new Promise((resolve, reject) => {
    axios
      .get("http://spider.jx3box.com/jx3servers")
      .then(function (response) {
        console.log(response);
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        resolve(reject);
      });
  });
};

module.exports = checkStatus;
