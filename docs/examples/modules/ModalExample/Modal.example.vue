<template lang="html">
  <div>
    <sui-button @click.native="toggle">Show Modal</sui-button>
    <sui-modal v-model="open"></sui-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalExample',
  data() {
    return { open: false };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="css">
</style>
