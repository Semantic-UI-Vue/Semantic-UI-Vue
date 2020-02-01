const definitionContext = require.context('.', true, /index\.js$/);
const exampleContext = require.context('.', true, /\.example.vue$/);
const sourceContext = require.context('!raw-loader!.', true, /\.example.vue$/);

const definitions = definitionContext.keys().reduce((defAcc, key) => {
  const match = key.match(/\.\/([^/]+)\/([^/]+)/);
  if (!match) {
    return defAcc;
  }

  const [, type, componentName] = match;
  const componentDefs = definitionContext(key).default;
  componentDefs.forEach(section => {
    section.examples = section.examples.map(example => {
      const exampleFile = `./${type}/${componentName}/${example.file}.example.vue`;
      return {
        ...example,
        source: sourceContext(exampleFile).default,
        runtime: exampleContext(exampleFile).default,
        componentName,
        type,
      };
    });
  });

  return {
    ...defAcc,
    [componentName]: componentDefs,
  };
}, {});

export default definitions;
