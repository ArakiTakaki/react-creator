const { catAndTo, mkdir } = require("../util/io");
const { generateLog } = require("../util/consoles");
const changeCase = require("change-case");
const PATH = require("../content/path");
/**
 * 置き換え文字列
 */
const componentName = /\{\{ComponentName\}\}/g;

const createComponent = (name, component, func) => {
  name = changeCase.pascalCase(name);
  const { CLASS, FUNC, SASS } = PATH.TEMPLATE_PATH;
  const output = PATH.MODULE_PATH[component];
  if (!output) {
    console.error(
      "モジュール名が不正です。 atoms molecules organisms templates pages の中から選択してください"
    );
    return false;
  }
  const words = [{ regex: componentName, word: name }];
  const componentType = func ? FUNC : CLASS;
  const BASE_PATH = `${output}/${name}/`;
  mkdir(BASE_PATH);

  catAndTo(componentType, `${BASE_PATH}/index.jsx`, words);
  catAndTo(SASS, `${BASE_PATH}/index.sass`, words);

  `export { default as ${name} } from "./${name}";\n`.toEnd(`${output}/index.js`);

  generateLog(`COMPONENT : ${component}`);
  generateLog(`NAME : ${name}`);
  console.log("= = = = 作成完了 = = = =");

  return true;
};


module.exports = createComponent;
