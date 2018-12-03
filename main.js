#!/usr/bin/env node
require("shelljs/global");
const initialDirs = require("./scripts/initialDirs");
const createComponent = require("./scripts/createComponent");
const createAction = require("./scripts/createAction");
const PATH = require("./content/path");

program = require("commander");
prompt = require("co-prompt");
co = require("co");
program
  .version("0.0.1", "-v, --version")
  .option("-i, --init", "初期化を行うコマンド")
  .option(
    "-c, --component <component>",
    "atoms molecules organisms templates pages",
    ""
  )
  .option(
    "--func",
    "ファンクションコンポーネントとして作成 デフォルトではクラスを作成する",
    false
  )
  .option("-a, --action <action>", "Actionを追加する")
  .option("-r, --reducer", "Actionsを元にReducersを追加する (-a限定)")
  .option("--comment [value]", "コメントを追加する (-a限定)", null)
  .action(env => {
    const { component, comment, func, store, action, reducer, init } = program;
    if (init) {
      initialDirs();
      return;
    }
    if (component !== "") {
      createComponent(env, component, func);
      return;
    }
    if (action) {
      createAction(action, comment);
      return;
    }
  });

program.parse(process.argv);
