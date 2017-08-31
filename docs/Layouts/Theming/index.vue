<template lang="html">
  <div is="sui-container">
    <h1 is="sui-header">Theming Examples</h1>

    <h2 is="sui-header" dividing>Site</h2>
    <docs-site />

    <h2 is="sui-header" dividing>Menu</h2>
    <docs-menu />

    <h2 is="sui-header" dividing>Buttons</h2>
    <docs-buttons />

    <h2 is="sui-header" dividing>Table</h2>
    <!-- <docs-table /> -->

    <h2 is="sui-header" dividing>Input</h2>
    <!-- <docs-input /> -->

    <h2 is="sui-header" dividing>Card</h2>
    <!-- <docs-card /> -->
  </div>
</template>

<script>
import DocsSite from './Site';
import DocsMenu from './Menu';
import DocsButtons from './Buttons';
// import DocsTable from './Table';
// import DocsInput from './Input';
// import DocsCard from './Card';

export default {
  components: {
    DocsSite,
    DocsMenu,
    DocsButtons,
    // DocsTable,
    // DocsInput,
    // DocsCard,
  },
}
</script>

<style lang="css">
</style>
