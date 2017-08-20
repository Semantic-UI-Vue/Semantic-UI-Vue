<template>
  <div id="app" is="sui-sidebar-pushable">
    <sui-menu is="sui-sidebar" inverted="true" vertical="true" visible>
      <sui-menu-item>
        <sui-image src="/static/images/logo.png" spaced="right" size="mini" />
        <strong>Semantic UI Vue</strong>
      </sui-menu-item>
      <sui-menu-item>
        <sui-header>Getting Started</sui-header>
        <sui-menu-menu>
          <a is="sui-menu-item" href="/introduction">Introduction</a>
          <a is="sui-menu-item" href="/usage">Usage</a>
          <a is="sui-menu-item" href="/usage">
            Github
            <sui-icon name="github" />
          </a>
        </sui-menu-menu>
      </sui-menu-item>
      <sui-menu-item>
        <sui-input
          icon="search"
          inverted
          placeholder="Start typing..."
          transparent
          v-model="search"
        />
      </sui-menu-item>
      <sui-menu-menu v-if="search">
        <router-link
          is="sui-menu-item"
          :key="entry.component"
          :active="!index"
          :to="entry.href"
          v-for="(entry, index) in matchingComponents"
        >
          {{ entry.content }}
          <span class="press-enter" v-if="!index">Press Enter</span>
        </router-link>
      </sui-menu-menu>
      <sui-menu-item :key="mod.name" v-if="!search" v-for="mod in modules">
        <sui-header>{{ mod.name }}</sui-header>
        <sui-menu-menu>
          <router-link
            is="sui-menu-item"
            :key="comp"
            :to="getUrl(mod.name, comp)"
            v-for="comp in mod.components"
          >
            {{ comp }}
          </router-link>
        </sui-menu-menu>
      </sui-menu-item>
    </sui-menu>
    <router-view is="sui-sidebar-pusher"></router-view>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.css';
import * as components from 'src';
import * as collections from 'src/collections';
import * as elements from 'src/elements';
import * as modules from 'src/modules';

export default {
  name: 'app',
  computed: {
    matchingComponents() {
      return this.modules
        .map(({ name, components }) => (
          components
            .filter(compName => new RegExp(this.search, 'i').test(compName))
            .map(component => ({
              content: component,
              href: this.getUrl(name, component),
            }))
        ))
        .reduce((acc, arr) => acc.concat(arr), [])
        .sort((a, b) => a.component > b.component)
    }
  },
  data() {
    const shouldShow = ([,component]) => (
      !(component.meta && component.meta.parent)
    );

    return {
      modules: [
        {
          name: 'Elements',
          components: Object.entries(elements).filter(shouldShow).map(([k]) => k),
        },
        {
          name: 'Collections',
          components: Object.entries(collections).filter(shouldShow).map(([k]) => k),
        },
        {
          name: 'Modules',
          components: Object.entries(modules).filter(shouldShow).map(([k]) => k),
        },
      ],
      search: '',
    };
  },
  components: {
    Test: {
      name: 'Test',
      template: '<div style="border: 5px solid red"><slot /></div>',
    },
  },
  methods: {
    getUrl(mod, comp) {
      return `/${mod}/${comp}`.toLowerCase();
    },
  },
};
</script>

<style scoped>
.press-enter {
  color: rgb(53, 189, 178);
  float: right;
}
</style>
