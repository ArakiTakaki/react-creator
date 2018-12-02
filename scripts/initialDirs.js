require("colors");
const { mkdir, cp } = require("../util/io");
const PATH = require("../content/path");

const initialDirs = () => {
  const { MODULE_PATH, INIT_PATH } = PATH;
  const {
    container,
    atoms,
    molecules,
    organisms,
    templates,
    pages
  } = MODULE_PATH;

  console.log("============ MAKE FILES ============\n".bold);
  mkdir(`${atoms}`);
  mkdir(`${molecules}`);
  mkdir(`${organisms}`);
  mkdir(`${templates}`);
  mkdir(`${pages}`);
  mkdir("src/sass");
  mkdir(container);
  for (let value of INIT_PATH) cp(value.input, value.output);
  console.log("\n============ MAKE FILES ============".bold);
};

module.exports = initialDirs;
