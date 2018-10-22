<template>
  <div id="app">
    <router-view />
    <portal-target name="semantic-ui-vue" />
  </div>
</template>

<script>
import 'semantic-ui-css/semantic.css';

export default {
  name: 'App',
};
</script>

<style>
html {
  overflow: hidden;
}

code {
  padding: 0.3em;
  padding-top: 0.1em;
  padding-bottom: 0.2em;
  margin: 0;
  font-size: 87.5%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  overflow-x: auto;
}
</style>
