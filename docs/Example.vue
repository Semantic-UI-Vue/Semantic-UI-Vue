<template>
  <div>
    <h4 is="sui-header">{{ title }}</h4>
    <p>{{ description }}</p>
    <div :class="exampleClass">
      <div :is="compiled" />
    </div>
    <editor v-model="source" />
  </div>
</template>

<script>
import * as Babel from 'babel-standalone';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import * as examples from 'docs/examples';
const parser = require('vue-loader/lib/parser');
import Editor from './Editor';

export default {
  name: 'Example',
  data() {
    return {
      exampleClass: `example-${Math.random().toString().slice(-5)}`,
      source: '',
    };
  },
  props: {
    title: String,
    description: String,
    component: String,
  },
  computed: {
    compiled() {
      const base = {
        name: `${upperFirst(camelCase(this.title))}Example`,
        template: '<div></div>',
      };
      try {
        const parsed = parser(this.source);
        const { code } = Babel.transform(
          parsed.script.content, { presets: ['es2015', 'stage-2'] }
        );
        const compiled = eval(`const exports = {};${code}`);
        compiled.template = parsed.template.content;

        return { ...base, ...compiled };
      } catch(e) {
        return base;
      }
    },
  },
  methods: {
    setStyle() {
      const parsed = parser(this.source);
      this.$el.querySelectorAll('style').forEach(s => s.remove());
      parsed.styles.forEach(({ content }) => {
        const style = document.createElement('style');
        this.$el.appendChild(style);
        style.textContent = content;
        Object.values(style.sheet.cssRules).forEach((rule) => {
          rule.selectorText = `.${this.exampleClass} ${rule.selectorText}`;
        });
      });
    },
  },
  watch: {
    compiled() {
      this.setStyle();
    },
  },
  beforeMount() {
    this.source = this.component;
  },
  mounted() {
    this.setStyle();
  },
  components: { Editor },
};
</script>
