#!/usr/bin/env node
require("shelljs/global");
const initialDirs = require("./scripts/initialDirs")
const PATH = require("./content/path");

/**
 * 置き換え文字列
 */
const componentName = /\{\{ComponentName\}\}/g;

program = require("commander");
prompt = require("co-prompt");
co = require("co");

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
    .to(`${output}/${name}.jsx`);
  cat(SASS)
    .stdout.replace(componentName, name)
    .to(`${output}/sass/${name}.sass`);
  console.log(`component: ${component}`);
  console.log(`name: ${name}.jsx`);
  console.log("= = = = 作成完了 = = = =");
};


program
  .version("0.0.1", "-v, --version")
  .option("-i, --init", "初期化を行う")
  .option(
    "-c, --component <component>",
    "atoms, molecules, organisms, templates, pages, store"
  )
  .option(
    "--func",
    "ファンクションコンポーネントとして作成 デフォルトではクラスを作成する"
  )
  .option("-s, --store <store>", "Storeを作成する")
  .option("-a, --action <action>", "Actionを追加する")
  .option("-r, --reducer", "Actionsを元にReducersを追加する (-a限定)")
  .option("--comment <comment>", "コメントを追加する (-a限定)")
  .action(env => {
    const { component, comment, func, store, action, reducer, init } = program;
    console.log(init);
    if (init) initialDirs();
    if (component) createComponent(env, component, func);
  });

program.parse(process.argv);
