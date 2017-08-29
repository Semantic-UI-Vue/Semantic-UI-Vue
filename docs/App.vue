<template>
  <div id="app" is="sui-sidebar-pushable">
    <docs-menu class="docs-sidebar" />
    <div class="docs-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.css';
import * as components from 'src';
import * as collections from 'src/collections';
import * as elements from 'src/elements';
import * as modules from 'src/modules';
import DocsMenu from './Menu';

export default {
  name: 'app',
  components: { DocsMenu },
};
</script>

<style>
html {
  overflow: hidden;
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
</style>

<style scoped>
#app {
  background-color: #F7F7F7;
}

.docs-container {
  margin-left: 250px;
  min-width: 550px;
  height: 100%;
  overflow-y: scroll;
}

.docs-sidebar {
  position: fixed!important;
  top: 0px!important;
  bottom: 0px!important;
  left: 0px!important;
  width: 250px!important;
  padding-bottom: 1em!important;
  background: rgb(27, 28, 29)!important;
  overflow-y: scroll!important;
}

@media screen and (max-width: 767px) {
  .docs-sidebar {
    display: none!important;
  }

  .docs-container {
    margin-left: 0!important;
  }
}
</style>
