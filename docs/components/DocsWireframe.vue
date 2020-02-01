<template>
  <img :src="`static/images/wireframes/${name}.png`" alt="paragraph" />
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
