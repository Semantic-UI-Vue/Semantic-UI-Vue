<template lang="html">
  <div class="dimmer-wrapper">
      <img src="/static/images/logo.png" />
    <sui-dimmer :active="true" :inverted="false"></sui-dimmer>
  </div>
</template>

<script>
export default {
  name: 'DimmerBasicExample',
};
</script>

<style lang="css">
.dimmer-wrapper{
    width: 150px;
    height: 150px;
}
</style>
