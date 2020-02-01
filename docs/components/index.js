const componentsContext = require.context('.', false, /\.vue$/);

export default Vue => {
  componentsContext.keys().forEach(key => {
    const name = key.replace('./', '').replace('.vue', '');
    const Component = componentsContext(key).default;
    Vue.component(name, Component);
  });
};
