<template>
  <div id="app" is="sui-sidebar-pushable">
    <sui-sidebar as="sui-menu" inverted="true" vertical="true" visible>
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
    </sui-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.css';

export default {
  name: 'app',
};
</script>
