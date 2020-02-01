<template lang="html">
  <sui-segment vertical>
    <sui-message info>
      Content headings are sized using
      <a href="https://j.eremy.net/confused-about-rem-and-em/"
        ><code>em</code></a
      >
      and are based on the font-size of their container.
    </sui-message>

    <sui-button-group>
      <sui-button icon="plus" @click.native="fontSize += 1" />
      <sui-button icon="minus" @click.native="fontSize -= 1" />
    </sui-button-group>

    <div :style="style">
      <sui-header size="huge">Huge header</sui-header>
      <docs-wireframe name="short-paragraph" />

      <sui-header size="large">Large header</sui-header>
      <docs-wireframe name="short-paragraph" />

      <sui-header size="medium">Medium header</sui-header>
      <docs-wireframe name="short-paragraph" />

      <sui-header size="small">Small header</sui-header>
      <docs-wireframe name="short-paragraph" />

      <sui-header size="tiny">Tiny header</sui-header>
      <docs-wireframe name="short-paragraph" />
    </div>
  </sui-segment>
</template>

<script>
export default {
  name: 'ContentHeaders',
  data() {
    return {
      fontSize: 14,
    };
  },
  computed: {
    style() {
      return { fontSize: `${this.fontSize}px` };
    },
  },
};
</script>
