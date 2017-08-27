<template>
  <sui-grid
    :class="containerClass"
    :columns="1"
    divided
  >
    <sui-grid-column>
      <h3 class="example-header" is="sui-header" :id="kebabCase(title)">
        {{ title }}
      </h3>
      <p>{{ description }}</p>
      <sui-menu class="options-menu" color="green" icon compact small text>
        <a is="sui-menu-item">
          <sui-icon color="grey" fitted name="linkify" size="large" />
        </a>
        <a is="sui-menu-item">
          <sui-icon color="grey" fitted name="window maximize" size="large" />
        </a>
        <a
          is="sui-menu-item"
          :active="showHtml"
          @click.native="showHtml = !showHtml"
        >
          <sui-icon :color="htmlColor" fitted name="html5" size="large" />
        </a>
        <a
          is="sui-menu-item"
          :active="showCode"
          @click.native="showCode = !showCode"
        >
          <sui-icon :color="codeColor" fitted name="code" size="large" />
        </a>
      </sui-menu>
    </sui-grid-column>

    <sui-grid-column :class="exampleClass">
      <div ref="compiled" :is="compiled" />
    </sui-grid-column>

    <sui-grid-column v-if="showCode">
      <sui-divider fitted horizontal>
        <sui-menu color="green" text>
          <a is="sui-menu-item" :active="copied" @click.native="copySource">
            <sui-icon name="copy" />
            <template v-if="copied">Copied!</template>
            <template v-if="!copied">Copy</template>
          </a>
          <a is="sui-menu-item" @click.native="resetSource">
            <sui-icon name="refresh" />
            Reset
          </a>
          <a is="sui-menu-item" :href="link">
            <sui-icon name="github" />
            Edit
          </a>
          <a
            is="sui-menu-item"
            href="https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/issues/new"
          >
            <sui-icon name="bug" />
            Issue
          </a>
        </sui-menu>
      </sui-divider>
      <editor v-model="source" />
    </sui-grid-column>

    <sui-grid-column v-if="showHtml">
      <sui-divider horizontal>rendered html</sui-divider>
      <editor :value="rendered" readonly />
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import * as Babel from 'babel-standalone';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import kebabCase from 'lodash/kebabCase';
import { html } from 'js-beautify';
import copyToClipboard from 'copy-to-clipboard';
const parser = require('vue-loader/lib/parser');
import Editor from './Editor';

export default {
  name: 'Example',
  data() {
    return {
      showCode: false,
      showHtml: false,
      exampleClass: `example-${Math.random().toString().slice(-5)}`,
      source: '',
      rendered: '',
      copied: false,
    };
  },
  props: {
    title: String,
    description: String,
    component: String,
    baseUrl: String,
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
    link() {
      const name = this.compiled.name;
      return `${this.baseUrl}/${name}.example.vue`;
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
    setHtml() {
      const markup = this.$refs.compiled.$el.outerHTML;
      const preFormattedHTML = markup
        .replace(/><(?!\/i|\/label|\/span|option)/g, '>\n<')
      this.rendered =  html(preFormattedHTML, {
        indent_size: 2,
        indent_char: ' ',
        wrap_attributes: 'auto',
        wrap_attributes_indent_size: 2,
        end_with_newline: false,
      });
    },
    init() {
      this.setStyle();
      this.setHtml();
    },
    copySource() {
      copyToClipboard(this.source);
      this.copied = true;
      setTimeout(() => this.copied = false, 1000);
    },
    resetSource() {
      this.source = this.component;
    },
    kebabCase,
  },
  watch: {
    compiled() {
      this.init();
    },
    component(value) {
      this.source = value;
    },
  },
  beforeMount() {
    this.source = this.component;
  },
  mounted() {
    this.init();
  },
  components: { Editor },
};
</script>

<style scoped>
.example-container {
  position: relative;
  margin-bottom: 2em !important;
  padding-bottom: 1em !important;
  transition: box-shadow 300ms;
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
