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
        />
      </sui-menu-item>
      <sui-menu-item v-for="mod in modules">
        <sui-header>{{ mod.name }}</sui-header>
        <sui-menu-menu>
          <a
            is="sui-menu-item"
            href="/hello"
            v-for="comp in mod.components"
          >
            {{ comp }}
          </a>
        </sui-menu-menu>
      </sui-menu-item>
    </sui-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.css';
import * as collections from 'src/collections';
import * as elements from 'src/elements';
import * as modules from 'src/modules';

export default {
  name: 'app',
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
      ]
    }
  },
  components: {
    Test: {
      name: 'Test',
      template: '<div style="border: 5px solid red"><slot /></div>',
    },
  }
};
</script>
