<template>
  <div is="sui-container" v-html="content" class="markdown">
  </div>
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
  data() { return { content: marked(this.markdown, { renderer }) }; },
};
</script>

<style>
.markdown img {
  margin: auto;
  display: block;
}

.markdown code {
  display: block;
  padding: 5px 10px;
}

.markdown {
  padding-top: 20px;
  padding-bottom: 50px;
}
</style>

<style scoped>
h1 {
  text-align: center;
}
</style>
