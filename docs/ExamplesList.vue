<template>
  <div is="sui-container" class="example-list-container">
    <template v-if="!sections.length">
      <sui-segment>
        <h2>No examples available :(</h2>
        <p>
          This component does not have any examples available yet!
          We will work to add examples ASAP.
        </p>
        <p>
          In a hurry? Feel free to add it yourself, we would love contributions!
          <router-link to="/contributing">Read more.</router-link>
        </p>
      </sui-segment>
    </template>
    <template v-if="sections.length">
      <sui-rail class="docs-rail" position="right">
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
      <sui-grid :columns="1" padded>
        <sui-segment is="sui-grid-column">
          <div :key="section.title" v-for="section in sections">
            <h2 class="section-header" is="sui-header">{{ section.title }}</h2>
            <example
              v-for="(example, index) in section.examples"
              v-bind="example"
              :key="index"
              :base-url="exampleBaseUrl"
            />
          </div>
        </sui-segment>
      </sui-grid>
    </template>
  </div>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
import Example from './Example';
import * as examples from 'docs/examples';

export default {
  name: 'ExamplesList',
  props: {
    type: String,
    component: String,
  },
  computed: {
    sections() {
      const entry = Object
        .entries(examples)
        .find(([name]) => name === `${this.component}Example`)

      return entry ? entry[1] : [];
    },
    exampleBaseUrl() {
      return `https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/edit/master/docs/examples/${this.type}/${this.component}Example`;
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
  width: auto;
  max-width: 960px!important;
  position: relative;
  margin-bottom: 20px;
}

.docs-rail {
  display: none;
}

@media screen and (min-width: 1200px) {
  .example-list-container {
    margin-right: 387px!important;
    margin-left: 0px !important;
  }

  .docs-rail {
    display: block;
    width: 319px;
  }
}
</style>
