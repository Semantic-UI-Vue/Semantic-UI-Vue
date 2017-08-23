<template>
  <sui-grid :columns="3" relaxed="very">
    <sui-grid-column>
      <demo-p v-for="j in [1, 2, 3, 4]" :key="j" />
    </sui-grid-column>
    <sui-divider vertical>and</sui-divider>
    <sui-grid-column>
      <demo-p v-for="j in [1, 2, 3, 4]" :key="j" />
    </sui-grid-column>
    <sui-divider vertical>or</sui-divider>
    <sui-grid-column>
      <demo-p v-for="j in [1, 2, 3, 4]" :key="j" />
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'VerticalDivider',
  components: {
    demoP: {
      template: '<img src="/static/images/wireframes/short-paragraph.png" />'
    },
  },
};
</script>

<style>
img {
  width: 100%;
}
</style>
