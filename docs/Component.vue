<template>
  <div class="component-container">
    <sui-grid :columns="1" padded>
      <sui-grid-column>
        <h1 is="sui-header">
          {{ title }}
          <sui-header-subheader>
            {{ component.description }}
          </sui-header-subheader>
        </h1>

        <sui-list class="space" horizontal link size="small">
          <sui-list-item>
            <sui-header color="grey" size="tiny"  />
          </sui-list-item>
        </sui-list>

        <sui-list class="docs-info" link>
          <sui-list-item>
            <sui-list-icon name="github" />
            <sui-list-content>
              <code>
                <a :href="githubLink" target="_blank">src/{{type}}/{{title}}/{{title}}.jsx</a>
              </code>
            </sui-list-content>
          </sui-list-item>
          <sui-list-item>
            <sui-list-icon name="book" />
            <sui-list-content>
              <a :href="semanticLink" target="_blank">
                Semantic UI {{title}} Docs
              </a>
            </sui-list-content>
          </sui-list-item>
        </sui-list>

        <h4 class="props-switcher" is="sui-header" :color="propSwitcherColor">
          <a href="javascript:void 0" @click="toggleProps">
            <sui-icon :name="propSwitcherIcon" />
            <template v-if="subcomponents.length">
              Props:
            </template>
            <template v-if="!subcomponents.length">
              Props
            </template>
          </a>
        </h4>

        <sui-menu
          v-if="subcomponents.length"
          color="green"
          compact
          secondary
          size="small"
        >
          <sui-menu-item
            :active="currentComponent === component"
            link
            @click.native="currentComponent = component"
          >
            {{ component.name }}
          </sui-menu-item>
          <sui-menu-item
            v-for="subcomponent in subcomponents"
            :key="subcomponent.name"
            :active="currentComponent === subcomponent"
            link
            @click.native="currentComponent = subcomponent"
          >
            {{ subcomponent.name }}
          </sui-menu-item>
        </sui-menu>

        <div class="table-container">
          <div class="current-component-description">
            {{ currentComponent.description }}
          </div>

          <sui-divider />

          <sui-table v-if="componentProps.length" basic="very" compact="very">
            <sui-table-header>
              <sui-table-row>
                <sui-table-header-cell>Name</sui-table-header-cell>
                <sui-table-header-cell>Default</sui-table-header-cell>
                <sui-table-header-cell>Type</sui-table-header-cell>
                <sui-table-header-cell>Description</sui-table-header-cell>
              </sui-table-row>
            </sui-table-header>

            <sui-table-body>
              <sui-table-row v-for="prop in componentProps" :key="prop.name">
                <sui-table-cell><code>{{prop.name}}</code></sui-table-cell>
                <sui-table-cell>
                  <code v-if="prop.default">{{prop.default}}</code>
                </sui-table-cell>
                <sui-table-cell>{{prop.type}}</sui-table-cell>
                <sui-table-cell>{{prop.description}}</sui-table-cell>
              </sui-table-row>
            </sui-table-body>
          </sui-table>

        </div>
      </sui-grid-column>
    </sui-grid>
    <examples-list :type="type" :component="title" />
  </div>
</template>

<script>
import capitalize from 'lodash/capitalize';
import get from 'lodash/get';
import * as components from 'src';
import ExamplesList from './ExamplesList';

const getComponentFromName = name => components[capitalize(name)];

export default {
  name: 'Component',
  data() {
    return {
      currentComponent: getComponentFromName(this.componentName),
    };
  },
  computed: {
    title() {
      return capitalize(this.componentName);
    },
    githubLink() {
      return `https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/blob/master/src/${this.type}/${this.title}/${this.title}.jsx`;
    },
    semanticLink() {
      return `https://semantic-ui.com/${this.type}/${this.componentName}.html`
    },
    component() {
      return getComponentFromName(this.componentName);
    },
    propSwitcherColor() {
      return this.currentComponent ? 'green' : 'grey';
    },
    propSwitcherIcon() {
      return `toggle ${this.currentComponent ? 'on' : 'off'}`;
    },
    subcomponents() {
      return Object
        .values(components)
        .filter(c => get(c, 'meta.parent') === this.component.name);
    },
    componentProps() {
      if (!this.currentComponent.props) return [];

      return Object
        .entries(this.currentComponent.props)
        .map(([name, value]) => {
          if (!value) {
            return { name };
          }

          if (typeof value === 'function') {
            return { name, type: value.name };
          }

          return { ...value, name, type: value.type.name };
        })
    },
  },
  methods: {
    toggleProps() {
      if (this.currentComponent) {
        this.currentComponent = null;
      } else {
        this.currentComponent = this.component;
      }
    },
  },
  watch: {
    componentName(v) {
      this.currentComponent = getComponentFromName(v);
    },
  },
  props: {
    type: String,
    componentName: String,
  },
  components: { ExamplesList },
};
</script>

<style scoped>
.space {
  display: block!important;
}

.docs-info {
  position: absolute!important;
  padding: 0.5em!important;
  margin: 0.5em!important;
  top: 0px!important;
  right: 0px!important;
  box-shadow: rgb(247, 247, 247) 0px 0px 1em 0.5em!important;
  background: rgb(247, 247, 247)!important;
}

.props-switcher {
  display: inline-flex!important;
  margin: 1em 0.5em 1em 0px!important;
  cursor: pointer!important;
}

.props-switcher>a {
  color: inherit;
}

.current-component-description {
  font-size: 1.08em;
  color: rgb(119, 119, 119);
}

.component-container {
  max-width: 1200px;
}

code:after,
code:before {
  letter-spacing: -0.2em;
  content: "\00a0";
}
</style>
