<template>
  <img
    :src="`${publicPath}static/images/wireframes/short-paragraph.png`"
    alt="paragraph"
  />
</template>

<script>
export default {
  name: 'DocsShortParagraph',
  data() {
    return { publicPath };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
