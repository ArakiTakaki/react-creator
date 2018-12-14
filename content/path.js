const path = require("path");
const PATH = {
  TEMPLATE_PATH: {
    FUNC: path.resolve(__dirname, "component/func.js.tmpl"),
    CLASS: path.resolve(__dirname, "component/class.js.tmpl"),
    TEST: path.resolve(__dirname, "component/component.test.js.tmpl"),
    STORE_CLASS: path.resolve(__dirname, "component/class.js.store.tmpl"),
    SASS: path.resolve(__dirname, "component/component.sass.tmpl"),
    ACTION: path.resolve(__dirname, "store/actions.js.tmpl"),
    COMMENT: path.resolve(__dirname, "util/comment.js.tmpl")
  },
  MODULE_PATH: {
    container: "src/js/container",
    store: "src/js/store",
    atoms: "src/js/component/atoms",
    molecules: "src/js/component/molecules",
    organisms: "src/js/component/organisms",
    templates: "src/js/component/templates",
    pages: "src/js/pages"
  },
  INIT_PATH: [
    {
      input: path.resolve(__dirname, "initial/js"),
      output: "src"
    },
    {
      input: path.resolve(__dirname, "initial/store"),
      output: "src/js"
    },
    {
      input: path.resolve(__dirname, "initial/sass"),
      output: "src"
    }
  ]
};
module.exports = PATH;
