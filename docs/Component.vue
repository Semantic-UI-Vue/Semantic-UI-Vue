<template>
  <sui-grid :columns="1" padded>
    <sui-grid-column>
      <h1 is="sui-header">
        {{ title }}
        <sui-header-subheader>
          {{ this.componentOpts.description }}
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
              <a href="#">src/{{this.type}}/{{title}}/{{title}}.js</a>
            </code>
          </sui-list-content>
        </sui-list-item>
        <sui-list-item>
          <sui-list-icon name="book" />
          <sui-list-content>
            <a href="#">Semantic UI {{title}} Docs</a>
          </sui-list-content>
        </sui-list-item>
      </sui-list>

      <h4 class="props-switcher" is="sui-header" color="green">
        <a href="#">
          <sui-icon name="toggle on" />
          Props:
        </a>
      </h4>

      <sui-menu color="green" compact secondary size="small">
        <sui-menu-item active link>Header</sui-menu-item>
        <sui-menu-item link>HeaderContent</sui-menu-item>
        <sui-menu-item link>HeaderSubheader</sui-menu-item>
      </sui-menu>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import capitalize from 'lodash/capitalize';
import * as components from 'src';

export default {
  name: 'Example',
  data() {
    return {
      showProps: true,
    };
  },
  computed: {
    title() {
      return capitalize(this.component);
    },
    componentOpts() {
      return components[capitalize(this.component)];
    },
  },
  props: {
    type: String,
    component: String,
  },
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

code {
  padding: 0;
  padding-top: 0.1em;
  padding-bottom: 0.2em;
  margin: 0;
  font-size: 87.5%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
}

code:after,
code:before {
  letter-spacing: -0.2em;
  content: "\00a0";
}
</style>
