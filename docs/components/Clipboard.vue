<template>
  <sui-popup content="Copy code" position="top center">
    <sui-icon name="copy" slot="trigger" ref="button" :class="classProp" />
  </sui-popup>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  inheritAttrs: false,
  props: {
    classProp: String,
    content: String,
  },
  data() {
    return {
      clipboard: null,
    };
  },
  mounted() {
    this.clipboard = new Clipboard(this.$refs.button.$el, {
      text: () => this.content,
    });
  },
  unmount() {
    this.clipboard.destroy();
  },
};
</script>
