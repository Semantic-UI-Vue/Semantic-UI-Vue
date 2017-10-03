<template>
  <div v-html="content" class="markdown" />
</template>

<script>
import marked, { Renderer } from 'marked';

const renderer = new Renderer();
renderer.heading = (text, level) => (
  `<h${level} class="ui ${level < 3 ? 'dividing' : ''} header">${text}</h${level}>`
);

export default {
  name: 'DocsPage',
  props: ['markdown'],
  computed: {
    content() {
      return marked(this.markdown, { renderer });
    },
  },
};
</script>

<style>
.markdown img {
  margin: auto;
  display: block;
}

.markdown a>img {
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
