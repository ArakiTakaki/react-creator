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
      // container/Root.jsx
      TEMPLATE: "content/initial/component/container.js.tmpl",
      OUT: "src/js/container/Root.jsx"
    },
    {
      //entry
      TEMPLATE: "content/initial/component/index.js.tmpl",
      OUT: "src/js/index.jsx"
    },
    {
      //base.sass
      TEMPLATE: "content/initial/sass/base.sass.tmpl",
      OUT: "src/sass/base.sass"
    },
    {
      //_valiables.sass
      TEMPLATE: "content/initial/sass/_valiables.sass.tmpl",
      OUT: "src/sass/_valiables.sass"
    },
    {
      //_mixin.sass
      TEMPLATE: "content/initial/sass/_mixin.sass.tmpl",
      OUT: "src/sass/_mixin.sass"
    },
    {
      //_aggregation.sass
      TEMPLATE: "content/initial/sass/_aggregation.sass.tmpl",
      OUT: "src/sass/_aggregation.sass"
    }
  ]
};
module.exports = PATH;
