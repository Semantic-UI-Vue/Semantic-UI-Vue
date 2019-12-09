<template>
  <div :class="$style.example">
    <sui-menu floated="right" text>
      <sui-popup content="View code" position="bottom center">
        <sui-menu-item slot="trigger" icon="code" :class="$style.action" @click="open = !open" />
      </sui-popup>
      <sui-popup content="Open on CodeSandbox" position="bottom center">
        <sui-menu-item slot="trigger" icon="connectdevelop" :class="$style.action" @click="openSandbox(sourceCode)" />
      </sui-popup>
      <sui-popup content="Maximize" position="bottom center">
        <sui-menu-item
          slot="trigger"
          :class="$style.action"
          target="_blank"
          icon="window maximize"
          @click="openMaximized"
        />
      </sui-popup>
    </sui-menu>
    <h4 :v-if="example.title" is="sui-header" :class="$style.h4">
      {{example.title}}
    </h4>
    <p :v-if="example.description" :class="$style.p">
      {{example.description}}
    </p>
    <div
      :is="previewContainerComponent"
      attached="top"
      :class="open ? $style.open : $style.closed"
    >
      <div :class="$style.exampleContainer">
        <div :is="component" />
      </div>
      <sui-label attached="top" :class="$style.label">
        Example
      </sui-label>
    </div>
    <div v-if="open">
      <sui-segment attached="bottom">
        <editor :value="sourceCode" />
      </sui-segment>
    </div>
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
import upperFirst from 'lodash/upperFirst';
import Editor from '../Editor.vue';
import { openSandbox } from './codesandbox';
const runtimeExamplesContext = require.context('../examples', true, /\.vue$/);
const sourceCodeContext = require.context('!raw-loader!../examples', true, /\.vue$/);

export default {
  components: { Editor },
  props: {
    example: Object,
    componentName: String,
    type: String,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    previewContainerComponent() {
      return this.open ? 'sui-segment' : 'div';
    },
    fileName() {
      return `${this.type}/${upperFirst(this.componentName)}Example/${this.example.file}.example.vue`;
    },
    component() {
      return runtimeExamplesContext(`./${this.fileName}`).default;
    },
    sourceCode() {
      return sourceCodeContext(`./${this.fileName}`).default;
    },
    maximizeLink() {
      const exampleName = kebabCase(
        this.fileName
          .replace(/.*\/([^/]+\/[^/.]+).*/, '$1')
          .replace('/', '-')
      );
      return `/#/maximize/${exampleName}`;
    },
  },
  methods: {
    openMaximized() {
      open(this.maximizeLink, '_blank');
    },
    openSandbox,
  }
};
</script>

<style module>
.h4 {
  font-size: 18px !important;
  margin: 0em 0em 0em !important;
}

.p {
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: rgba(0, 0, 0, 0.8) !important;
  margin-top: 0 !important;
  padding-bottom: 1em !important;
}

.action {
  opacity: .5 !important;
  transition: opacity 0.3s ease-out;
  cursor: pointer;
}

.action:hover {
  opacity: 1 !important;
}

.open {
  padding: 0 !important;
}

.open > .exampleContainer {
  padding: 3.5em 1em 1em !important;
}

.closed > .label {
  visibility: collapse;
}

.exampleContainer {
  overflow-x: auto;
}
</style>
