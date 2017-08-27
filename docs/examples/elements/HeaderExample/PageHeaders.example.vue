<template lang="html">
  <div>
    <sui-message info>
      Page headings are sized using
      <a href="https://j.eremy.net/confused-about-rem-and-em/"><code>rem</code></a>
      and are not affected by surrounding content size.
    </sui-message>

    <h1 is="sui-header">First header</h1>
    <docs-paragraph short />

    <h2 is="sui-header">Second header</h2>
    <docs-paragraph short />

    <h3 is="sui-header">Third header</h3>
    <docs-paragraph short />

    <h4 is="sui-header">Fourth header</h4>
    <docs-paragraph short />

    <h5 is="sui-header">Fifth header</h5>
    <docs-paragraph short />
  </div>
</template>

<script>
export default {
  name: 'PageHeaders',
};
</script>
