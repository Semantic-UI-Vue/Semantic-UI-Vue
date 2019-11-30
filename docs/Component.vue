<template>
  <div>
    <component-head :component-name="componentName" />
    <sui-container class="main">
      adcadcadc
      <component-rail />
    </sui-container>
  </div>
</template>

<script>
import ComponentHead from './ComponentHead';
import ComponentRail from './ComponentRail';

export default {
  name: 'SuiComponent',
  components: {
    ComponentHead,
    ComponentRail,
  },
  props: {
    componentName: String,
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
