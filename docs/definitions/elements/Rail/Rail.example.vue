<template lang="html">
  <sui-grid centered :columns="3">
    <sui-grid-column>
      <sui-segment>
        <docs-wireframe name="paragraph" />
        <docs-wireframe name="paragraph" />

        <sui-rail position="left">
          <sui-segment>Left Rail Content</sui-segment>
        </sui-rail>

        <sui-rail position="right">
          <sui-segment>Right Rail Content</sui-segment>
        </sui-rail>
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'RailExample',
};
</script>
