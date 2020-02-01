// Taken from https://github.com/y-nk/vue-fragment
// Not using a dependency because it was breaking the umd build

/* eslint-disable */

const directive = {
  inserted: function(element) {
    /*
    This hack is a bit strong, but it works great.
    The fragment feature cannot be made with Vue.js vDOM, so we use regular DOM instead. We just transport the DOM nodes after vDOM rendering from one DOM node (the fragment's node) to its parent node.
  */

    const fragment = document.createDocumentFragment();
    const children = Array.from(element.childNodes);
    const parent = element.parentNode;
    const tail = document.createComment('fragment tail');

    fragment.appendChild(tail);
    children.forEach(child => fragment.appendChild(child));

    parent.insertBefore(fragment, element);
    parent.removeChild(element);

    /*
      There's a problem though.
      In Vue.js diff algorithm, there will be a test on parent node at the time of DOM node insertion, this to make sure that the new nodes belong to where they should go ; because we modify the DOM structure, this test fails and new nodes are not inserted/appended (https://github.com/vuejs/vue/blob/dev/src/core/vdom/patch.js#L275).
      The solution is to fool Vue.js in believing that the children are still in the fragment's DOM node.
      To do so :
      1. we're gonna turn parentNode property readable only using defineProperty APi, so the parentNode won't be updated and the test will pass.
      2. new nodes will be appended/inserted into fragment's DOM node, but we want them into the parent's, so we're gonna override fragment's DOM node's functions responsible for DOM manipulation which are used in the Vue.js node-ops for the web platform (https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/node-ops.js) and redirect the call to the parent.
    */

    children.forEach(child => freeze(child, element));

    // backup of original functions to put them back in place later.
    element.__hooks__ = {
      appendChild: element.appendChild,
      insertBefore: element.insertBefore,
      removeChild: element.removeChild,
    };

    // override of node ops 1/3
    element.appendChild = function(child) {
      const op = parent.insertBefore(child, tail);

      if (child.parentNode !== element) freeze(child, element);

      return op;
    };

    // override of node ops 2/3
    element.insertBefore = function(child, reference) {
      const op = parent.insertBefore(child, reference);

      if (child.parentNode !== element) freeze(child, element);

      return op;
    };

    // override of node ops 3/3
    element.removeChild = function(child) {
      unfreeze(child);
      return parent.removeChild(child);
    };
  },

  unbind(element) {
    if (element.__hooks__) {
      Object.keys(element.__hooks__).forEach(hook => {
        element[hook] = element.__hooks__[hook];
      });

      delete element.__hooks__;
    }
  },
};

// we keep the configurable flag on, so we can delete the property later to bring it back to normal
const freeze = (child, parent) => {
  Object.defineProperty(child, 'parentNode', {
    configurable: true,
    writable: false,
    value: parent,
  });
};

// we force-delete for unfreeze, and recreate parent as null
const unfreeze = child => {
  Object.defineProperty(child, 'parentNode', {
    configurable: true,
    writable: true,
    value: null,
  });
};

export default {
  abstract: true,
  directives: { fragment: directive },
  render: function(h) {
    return h(
      'div',
      {
        attrs: { class: 'v-fragment' },
        directives: [{ name: 'fragment' }],
      },
      [this.$slots.default],
    );
  },
};
