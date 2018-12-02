/**
 * 置き換え文字列
 */
const componentName = /\{\{ComponentName\}\}/g;

const createComponent = (name, component, func) => {
  const { CLASS, FUNC, SASS } = PATH.TEMPLATE_PATH;
  const output = PATH.MODULE_PATH[component];
  if (!output) {
    console.error(
      "モジュール名が不正です。 atoms molecules organisms templates pages の中から選択してください"
    );
    return;
  }
  cat(func ? FUNC : CLASS)
    .stdout.replace(componentName, name)
    .to(`${output}/${name}/index.jsx`);
  cat(SASS)
    .stdout.replace(componentName, name)
    .to(`${output}/${name}/index.sass`);
  console.log(`component: ${component}`);
  console.log(`name: ${name}.jsx`);
  console.log("= = = = 作成完了 = = = =");
};

module.exports = createComponent;
