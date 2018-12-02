require("colors");
module.exports = {
  generateLog(message) {
    console.log("Generate".bold.cyan + " : " + message.green);
  }
};
