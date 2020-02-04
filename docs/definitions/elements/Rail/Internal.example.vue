<template lang="html">
  <sui-segment class="container">
    <sui-rail internal position="left">
      <sui-segment>Left Rail Content</sui-segment>
    </sui-rail>

    <sui-rail internal position="right">
      <sui-segment>Right Rail Content</sui-segment>
    </sui-rail>
  </sui-segment>
</template>

<script>
export default {
  name: 'InternalExample',
};
</script>

<style media="screen" scoped>
.container {
  min-height: 300px;
  width: 960px;
}
</style>
