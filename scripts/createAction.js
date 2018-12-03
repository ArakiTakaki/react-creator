const { generateLog } = require("../util/consoles");
const { catAndTo } = require("../util/io");
const PATH = require("../content/path");
const changeCase = require("change-case");

/**
 * 置き換え文字列
 */
const ACTION_NAME_REGEX = /\{\{ACTION_NAME\}\}/g;
const actionNameRegex = /\{\{actionName\}\}/g;
const CommentRegex = /\{\{Comment\}\}/g;

/**
 * 各種テンプレートのpath
 */
const ACTION_TMPL = PATH.TEMPLATE_PATH.ACTION;
const COMMENT_TMPL = PATH.TEMPLATE_PATH.COMMENT;
/**
 * 出力先Store
 */
const BASE_OUTPUT_PATH = PATH.MODULE_PATH.store;

/**
 *
 * @param {string} actionName キャメルケース(パスカルケースではない)
 * @param {string} comment actionsのコメントを付与する。無記入の場合は省略
 */
const createAction = (actionName, comment) => {
  const words = [
    {
      regex: actionNameRegex,
      word: changeCase.camelCase(actionName)
    },
    {
      regex: ACTION_NAME_REGEX,
      word: changeCase.constantCase(actionName)
    }
  ];
  if (comment != null && comment !== "") {
    createComment(comment);
  }
  catAndTo(ACTION_TMPL, `${BASE_OUTPUT_PATH}/actions.js`, words, true);
};

const createComment = comment => {
  const words = [
    {
      regex: CommentRegex,
      word: comment
    }
  ];
  console.log(comment);
  catAndTo(COMMENT_TMPL, `${BASE_OUTPUT_PATH}/actions.js`, words, true);
};

module.exports = createAction;
