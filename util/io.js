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
  },
  /**
   * @param {string} state cpコマンドを参考にする
   * @param {string} inputPath
   * @param {string} outputPath
   */
  cp(inputPath, outputPath) {
    shell.cp("-R", inputPath, outputPath);
    shell.ls(inputPath).forEach(value => {
      generateLog(`${outputPath}/${value}`);
    })
  }
};
