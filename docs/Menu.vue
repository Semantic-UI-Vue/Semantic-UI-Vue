<template>
  <sui-menu
    is="sui-sidebar"
    id="docs-menu"
    inverted="true"
    vertical="true"
    animation="overlay"
    :visible="visible"
  >
    <sui-menu-item>
      <sui-image :src="`/static/images/logo.png`" spaced="right" size="mini" />
      <strong>
        Semantic UI Vue
        <small>
          <em>{{ version }}</em>
        </small>
      </strong>
    </sui-menu-item>
    <sui-menu-item>
      <sui-menu-header>Getting Started</sui-menu-header>
      <sui-menu-menu>
        <router-link is="sui-menu-item" to="/">Quick Start</router-link>
        <router-link is="sui-menu-item" to="/layouts">
          Layouts
        </router-link>
        <router-link is="sui-menu-item" to="/contributing">
          Contributing
        </router-link>
        <router-link is="sui-menu-item" to="/features">
          Feature Status
        </router-link>
        <a
          is="sui-menu-item"
          href="https://github.com/Semantic-UI-Vue/Semantic-UI-Vue"
        >
          Github
          <sui-icon name="github" />
        </a>
        <a is="sui-menu-item" href="https://semantic-ui.com/">
          Semantic UI
          <i class="icon semantic-ui">
            <img src="https://semantic-ui.com/favicon.ico" />
          </i>
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
        @keypress.native="openFirst"
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
    <template v-if="!search">
      <sui-menu-item :key="mod.name" v-for="mod in modules">
        <sui-menu-header>{{ mod.name }}</sui-menu-header>
        <sui-menu-menu>
          <router-link
            is="sui-menu-item"
            active-class="active"
            :key="comp"
            :to="getUrl(mod.name, comp)"
            v-for="comp in mod.components"
          >
            {{ comp }}
          </router-link>
        </sui-menu-menu>
      </sui-menu-item>
    </template>
  </sui-menu>
</template>

<script>
import 'semantic-ui-css/semantic.css';
import * as collections from 'semantic-ui-vue/collections';
import * as elements from 'semantic-ui-vue/elements';
import * as modules from 'semantic-ui-vue/modules';
import * as views from 'semantic-ui-vue/views';

export default {
  props: {
    visible: Boolean,
  },
  data() {
    const shouldShow = ([, component]) =>
      !(component.meta && component.meta.parent);

    return {
      modules: [
        {
          name: 'Elements',
          components: Object.entries(elements)
            .filter(shouldShow)
            .map(([k]) => k),
        },
        {
          name: 'Collections',
          components: Object.entries(collections)
            .filter(shouldShow)
            .map(([k]) => k),
        },
        {
          name: 'Views',
          components: Object.entries(views)
            .filter(shouldShow)
            .map(([k]) => k),
        },
        {
          name: 'Modules',
          components: Object.entries(modules)
            .filter(shouldShow)
            .map(([k]) => k),
        },
      ],
      search: '',
      version: process.version,
    };
  },
  computed: {
    matchingComponents() {
      return this.modules
        .map(({ name, components }) =>
          components
            .filter(compName => new RegExp(this.search, 'i').test(compName))
            .map(component => ({
              content: component,
              href: this.getUrl(name, component),
            })),
        )
        .reduce((acc, arr) => acc.concat(arr), [])
        .sort((a, b) => a.component > b.component);
    },
  },
  methods: {
    getUrl(mod, comp) {
      return `/${mod}/${comp}`.toLowerCase();
    },
    openFirst(e) {
      if (e.keyCode === 13 && this.search && this.matchingComponents.length) {
        this.$router.push(this.matchingComponents[0].href);
      }
    },
  },
};
</script>

<style scoped>
.press-enter {
  color: rgb(53, 189, 178);
  float: right;
}

.semantic-ui.icon img {
  height: 12px;
}

#docs-menu:hover::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.25);
}

#docs-menu::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0);
}

#docs-menu::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0);
}
</style>
