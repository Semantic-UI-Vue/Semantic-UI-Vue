<template>
  <sui-grid
    :class="containerClass"
    columns="1"
    divided
  >
    <sui-grid-column>
      <h3 class="example-header" is="sui-header">{{ title }}</h3>
      <p>{{ description }}</p>
      <sui-menu class="options-menu" color="green" icon compact small text>
        <a is="sui-menu-item">
          <sui-icon color="grey" fitted name="linkify" size="large" />
        </a>
        <a is="sui-menu-item">
          <sui-icon color="grey" fitted name="window maximize" size="large" />
        </a>
        <a is="sui-menu-item" :active="showHtml">
          <sui-icon :color="htmlColor" fitted name="html5" size="large" />
        </a>
        <a is="sui-menu-item" :active="showCode">
          <sui-icon :color="codeColor" fitted name="code" size="large" />
        </a>
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column :class="exampleClass">
      <div :is="compiled" />
    </sui-grid-column>
    <sui-grid-column>
      <editor v-model="source" />
    </sui-grid-column>
  </sui-grid>
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
      showCode: true,
      showHtml: false,
      exampleClass: `rendered-example example-${Math.random().toString().slice(-5)}`,
      source: '',
    };
  },
  props: {
    title: String,
    description: String,
    component: String,
  },
  computed: {
    codeColor() {
      return this.showCode ? undefined : 'grey';
    },
    htmlColor() {
      return this.showHtml ? undefined : 'grey';
    },
    containerClass() {
      return this.showCode || this.showHtml ?
        'example-container active' :
        'example-container';
    },
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

<style scoped>
.example-container {
  position: relative;
}

.example-container.active {
  box-shadow: rgb(204, 204, 204) 0px 0px 30px;
}

.options-menu {
  transition: opacity 200ms;
  position: absolute;
  top: 1rem;
  right: 1rem;
  opacity: 0;
}

.example-container:hover .options-menu {
  opacity: 1;
}

.example-header {
  margin: 0!important;
}
</style>
