<template lang="html">
  <div class="example">
    <sui-segment circular>
      <sui-header>
        Buy Now
        <sui-header sub>$10.99</sui-header>
      </sui-header>
    </sui-segment>
    <sui-segment inverted circular>
      <sui-header inverted>
        Buy Now
        <sui-header sub>$10.99</sui-header>
      </sui-header>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'CircularExample',
};
</script>

<style>
.example .circular.segment {
  width: 175px;
  height: 175px;
}
</style>
