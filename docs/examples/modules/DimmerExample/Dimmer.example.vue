<template lang="html">
  <div class="dimmer-wrapper">
      <img src="/static/images/logo.png" >
    <sui-dimmer active :inverted="false"/>
  </div>
</template>

<script>
export default {
  name: 'Dimmer',
};
</script>

<style lang="css">
.dimmer-wrapper{
    width: 150px;
    height: 150px;
}
</style>
