<template>
  <div id="app" is="sui-sidebar-pushable">
    <sui-sidebar as="sui-menu" inverted="true" vertical="true" visible>
      <sui-menu-item>
        <sui-image src="/static/images/logo.png" spaced="right" size="mini" />
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
