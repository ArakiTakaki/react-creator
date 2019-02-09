require("colors");
const path = require('path');
// const { mkdir, cp } = require("../util/io");
const initialDirs = () => {
  const a = path.resolve('./.createrc.json');
  console.log(a);

  // console.log("============ MAKE FILES ============\n".bold);
  // mkdir(`${atoms}`);
  // mkdir(`${molecules}`);
  // mkdir(`${organisms}`);
  // mkdir(`${templates}`);
  // mkdir(`${pages}`);
  // mkdir("src/sass");
  // mkdir(container);
  // for (let value of INIT_PATH) cp(value.input, value.output);
  // console.log("\n============ MAKE FILES ============".bold);
};

module.exports = initialDirs;
