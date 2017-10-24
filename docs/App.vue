<template>
  <div id="app">
    <router-view />
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
  name: 'App',
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
  overflow-x: auto;
}
</style>
