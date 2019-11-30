<template>
  <sui-rail dividing position="right" id="docs-rail">
    <h4 is="sui-header">
      {{title}}
    </h4>

    <sui-accordion vertical fluid text is="sui-menu">
      <sui-menu-item v-for="section in examples" :key="section.title">
        <sui-accordion-title is="sui-menu-header" active>
          {{section.title}}
          <sui-icon name="dropdown" />
        </sui-accordion-title>
        <sui-accordion-content is="sui-menu" text>
          <template v-for="(example, index) in section.examples">
            <a :key="index" v-if="example.title" is="sui-menu-item">
              {{example.title}}
            </a>
          </template>
        </sui-accordion-content>
      </sui-menu-item>
    </sui-accordion>
  </sui-rail>
</template>

<script>
import * as examples from './examples';
import capitalize from 'lodash/capitalize';

export default {
  props: {
    componentName: String,
  },
  computed: {
    examples() {
      return examples[`${this.title}Example`];
    },
    title() {
      return capitalize(this.componentName);
    }
  },
}
</script>

<style>
#docs-rail {
  margin-left: 3em;
  padding-top: 2em;
  width: 319px;
}
</style>
