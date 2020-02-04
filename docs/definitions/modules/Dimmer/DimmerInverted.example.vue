<template lang="html">
  <div>
    <img src="/static/images/logo.png" />
    <sui-dimmer :active="enable" inverted />
  </div>
</template>
<script>
export default {
  name: 'DimmerBasicExample',
  data() {
    return { enable: true };
  },
};
</script>

<style lang="css">
.margin-top {
  margin-top: 40px;
}
</style>
