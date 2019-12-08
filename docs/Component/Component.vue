<template>
  <div>
    <component-head :component-name="componentName" :type="type" />
    <sui-container class="main">
      <component-body :component-name="componentName" :type="type" />
      <component-rail :component-name="componentName" :type="type" />
    </sui-container>
  </div>
</template>

<script>
import ComponentHead from './ComponentHead';
import ComponentRail from './ComponentRail';
import ComponentBody from './ComponentBody';

export default {
  name: 'SuiComponent',
  components: {
    ComponentHead,
    ComponentRail,
    ComponentBody,
  },
  props: {
    componentName: String,
    type: String,
  },
};
</script>

<style lang="css" scoped>
.main {
  position: relative;
  margin-left: 3em !important;
  margin-right: 387px !important;
  max-width: 980px !important;
  padding: 2em 0em 7em;
  width: auto;
}
</style>
