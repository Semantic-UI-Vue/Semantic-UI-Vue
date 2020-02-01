<template>
  <div>
    <sui-message warning>
      Popup relies on Vue Portal to be installed and globally added to you
      application. For Popup to correctly work, install
      <a href="https://linusborg.github.io/portal-vue" target="_blank"
        >Portal Vue</a
      >

      and write:

      <pre>
// index.js
import Vue from 'vue';
import PortalVue from 'portal-vue';
// ...
Vue.use(PortalVue);
      </pre>

      Also, make sure to add
      <code>&lt;portal-target name="semantic-ui-vue"></code> at the root level
      of your app.
    </sui-message>
    <sui-popup content="Add users to your feed">
      <sui-button icon="add" slot="trigger" />
    </sui-popup>
  </div>
</template>

<script>
export default {};
</script>
