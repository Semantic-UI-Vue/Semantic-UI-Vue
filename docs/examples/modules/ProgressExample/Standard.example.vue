<template lang="html">
  <div>
    <sui-progress :percent="percent" label="Uploading Files" />
    <sui-button @click.native="decrease">-</sui-button>
    <sui-button @click.native="increase">+</sui-button>
  </div>
</template>

<script>
export default {
  name: 'StandardProgressExample',
  data() {
    return { percent: 10 };
  },
  methods: {
    decrease() {
      this.percent -= 17;
      if (this.percent <= 0) {
        this.percent = 0;
      }
    },
    increase() {
      this.percent += 13;
      if (this.percent >= 100) {
        this.percent = 100;
      }
    },
  },
};
</script>
