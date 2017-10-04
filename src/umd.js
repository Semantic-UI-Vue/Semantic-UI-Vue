import * as _SemanticUIVue from './index';

function SemanticUIVue(...args) {
  _SemanticUIVue.default(...args);
}

Object.keys(_SemanticUIVue).forEach((key) => {
  SemanticUIVue[key] = _SemanticUIVue[key];
});

module.exports = SemanticUIVue;
