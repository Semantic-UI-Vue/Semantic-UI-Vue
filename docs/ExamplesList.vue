<template>
  <div is="sui-container" class="example-list-container">
    <sui-rail class="docs-rail" dividing position="right">
      <h4 is="sui-header">{{ component }}</h4>
      <sui-accordion is="sui-menu" vertical following fluid text>
        <sui-menu-item
          :key="section.title"
          v-for="section in sections"
        >
          <a is="sui-accordion-title">
            <sui-icon name="dropdown" />
            <b>{{ section.title }}</b>
          </a>
          <sui-accordion-content is="sui-menu-menu">
            <router-link
              is="sui-menu-item"
              :key="example.title"
              v-if="example.title"
              v-for="example in section.examples"
              :to="{ hash: kebabCase(example.title) }"
            >
              {{ example.title }}
            </router-link>
          </sui-accordion-content>
        </sui-menu-item>
      </sui-accordion>
    </sui-rail>
    <sui-grid
      :key="section.title"
      v-for="section in sections"
      :columns="1"
      padded
    >
      <sui-grid-column>
        <h2 class="section-header" is="sui-header">{{ section.title }}</h2>
        <example
          v-for="(example, index) in section.examples"
          v-bind="example"
          :key="index"
        />
      </sui-grid-column>
    </sui-grid>
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
import Example from './Example';
import * as examples from 'docs/examples';

export default {
  name: 'ExamplesList',
  props: {
    component: String,
  },
  computed: {
    sections() {
      const entry = Object
        .entries(examples)
        .find(([name]) => name === `${this.component}Example`)

      return entry ? entry[1] : [];
    },
  },
  components: { Example },
  methods: { kebabCase },
  mounted() {
    // go to hash
    if (this.$route.hash) {
      const el = document.getElementById(this.$route.hash.substr(1));
      if (el) el.scrollIntoView();
    }
  },
};
</script>

<style scoped>
.section-header {
  margin-bottom: 1.5em;
}

.example-list-container {
  margin-right: 387px!important;
  width: auto;
  max-width: 960px!important;
  position: relative;
}

.docs-rail {
  width: 319px;
}
</style>
