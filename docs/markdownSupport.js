import marked, { Renderer } from 'marked';

const renderer = new Renderer();
renderer.heading = (text, level) =>
  `<h${level} class="ui ${
    level < 3 ? 'dividing' : ''
  } header">${text}</h${level}>`;

const render = (el, binding) => {
  const data = binding.value || '';
  // eslint-disable-next-line no-param-reassign
  el.innerHTML = marked(data, { renderer });
};

export default Vue => {
  Vue.directive('markdown', {
    bind: render,
    update: render,
  });
};
