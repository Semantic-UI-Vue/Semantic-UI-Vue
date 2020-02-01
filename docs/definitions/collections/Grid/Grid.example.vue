<template lang="html">
  <sui-grid :class="$style.grid">
    <template v-for="(col, index) in columns">
      <sui-grid-column :class="$style.column" :key="index" />
    </template>
  </sui-grid>
</template>

<script>
export default {
  name: 'GridExample',
  data() {
    return { columns: [...new Array(16)] };
  },
};
</script>

<style module lang="css">
.grid:before {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #fafafa;
  content: '';
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  box-shadow: 0px 0px 0px 1px #dddddd inset;
}

.column:after {
  background-color: rgba(86, 61, 124, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
  content: '';
  display: block;
  min-height: 50px;
}
</style>
