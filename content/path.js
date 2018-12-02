const path = require("path");
const PATH = {
  TEMPLATE_PATH: {
    FUNC: "content/component/func.js.tmpl",
    CLASS: "content/component/class.js.tmpl",
    STORE_CLASS: "content/component/class.js.store.tmpl",
    SASS: "content/component/component.sass.tmpl"
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
