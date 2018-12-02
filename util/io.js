const shell = require("shelljs");
const { generateLog } = require("./consoles");

module.exports = {
  mkdir(path) {
    shell.mkdir("-p", path);
    generateLog(path);
  },
  generate(template, outputPath) {
    shell.cat(template).stdout.to(outputPath);
    generateLog(outputPath);
  }
};
