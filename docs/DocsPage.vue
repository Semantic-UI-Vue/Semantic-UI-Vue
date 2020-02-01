<template>
  <div v-markdown="markdown" class="markdown"></div>
</template>

<script>
export default {
  name: 'DocsPage',
  props: {
    markdown: String,
  },
};
</script>

<style>
.markdown img {
  margin: auto;
  display: block;
}

.markdown a > img {
  margin: 0;
  display: inline;
}

.markdown code {
  display: block;
  padding: 5px 10px;
}

.markdown {
  padding: 20px;
  padding-bottom: 50px;
  max-width: 1200px;
}
</style>

<style scoped>
h1 {
  text-align: center;
}
</style>
