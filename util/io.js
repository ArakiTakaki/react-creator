const shell = require("shelljs");
const { generateLog } = require("./consoles");

shell.config.reset({
  fatal: false,
  globOptions: {},
  maxdepth: 255,
  noglob: false,
  silent: true,
  verbose: false
});

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
    });
  },
  /**
   *
   * @param {*} inputPath
   * @param {*} outputPath
   * @param {array[object]} replaceWords
   * @param {regex} replaceWords[n].regex
   * @param {string} replaceWords[n].word
   */
  catAndTo(inputPath, outputPath, replaceWords) {
    let value = shell.cat(inputPath).stdout;
    for (let rw of replaceWords) {
      value = value.replace(rw.regex, rw.word);
    }
    value.to(outputPath);
  }
};
