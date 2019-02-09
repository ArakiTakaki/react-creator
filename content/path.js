const path = require('path');

console.log(path.resolve('.'));
module.exports = {
  components: {
    class: path.resolve(__dirname,'./components/ClassComponent.jsx.tmpl'),
    functional: path.resolve(__dirname,'./components/FunctionalComponent.jsx.tmpl'),
  }
}