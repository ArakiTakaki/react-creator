require("colors");
const { mkdir, generate } = require("../util/io");
const PATH = require("../content/path");

const initialDirs = () => {
  const { MODULE_PATH } = PATH;
  const {
    container,
    atoms,
    molecules,
    organisms,
    templates,
    pages
  } = MODULE_PATH;

  console.log("============ MAKE FILES ============\n".bold);
  mkdir(`${atoms}/sass`);
  mkdir(`${molecules}/sass`);
  mkdir(`${organisms}/sass`);
  mkdir(`${templates}/sass`);
  mkdir(`${pages}/sass`);
  mkdir("src/sass");
  mkdir(container);
  console.log("\n============ MAKE FILES ============".bold);
};

module.exports = initialDirs;
