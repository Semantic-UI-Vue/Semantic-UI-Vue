<template>
  <div class="component-body">
    <template v-for="element in elements">
      <div :key="element.name">
        <h2 is="sui-header" dividing>{{element.name}}</h2>
        <slot v-bind="element" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    elementComponent: Object,
    elements: Array,
  },
}
</script>

<style scoped>
.component-body {
  position: relative;
  margin-left: 3em !important;
  margin-right: 387px !important;
  max-width: 980px !important;
  padding: 2em 0em 7em;
  width: auto;
}

.ui.dividing.header {
  margin-bottom: 3rem;
}

.example {
  margin: 2em 0em;
  padding: 2em 0em;
  position: relative;
}

.component-body .example:first-child,
.component-body .ui.header + .example {
  margin-top: 0;
}
</style>
