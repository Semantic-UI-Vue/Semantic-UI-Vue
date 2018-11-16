<template lang="html">
  <sui-segments>
    <sui-segment>
      <p>Top</p>
    </sui-segment>
    <sui-segments>
      <sui-segment>
        <p>Nested Top 1</p>
      </sui-segment>
      <sui-segment>
        <p>Nested Top 2</p>
      </sui-segment>
    </sui-segments>
    <sui-segment>
      <p>Middle</p>
    </sui-segment>
    <sui-segments horizontal>
      <sui-segment>Top</sui-segment>
      <sui-segment>Middle</sui-segment>
      <sui-segment>Bottom</sui-segment>
    </sui-segments>
    <sui-segment>
      <p>Bottom</p>
    </sui-segment>
  </sui-segments>
</template>

<script>
export default {
  name: 'NestedSegmentsExample',
};
</script>
