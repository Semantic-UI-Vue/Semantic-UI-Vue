<template>
  <img
    :src="`static/images/wireframes/${name}.png`"
    alt="paragraph"
  >
</template>

<script>
export default {
  name: 'DocsWireframe',
  props: ['name'],
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
