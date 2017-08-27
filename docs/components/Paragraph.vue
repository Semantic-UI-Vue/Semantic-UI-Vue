<template>
  <img
    :src="`static/images/wireframes/${short ? 'short' : ''}paragraph.png`"
    alt="paragraph"
  />
</template>

<script>
export default {
  name: 'DocsParagraph',
  props: ['short'],
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
