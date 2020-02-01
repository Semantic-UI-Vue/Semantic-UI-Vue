<template lang="html">
  <div>
    <sui-segment>
      <sui-progress attached top :percent="percent" :label="label" />
      <sui-progress
        attached
        bottom
        color="green"
        :percent="percent"
        :label="label"
      />
    </sui-segment>
    <sui-button @click.native="decrease">-</sui-button>
    <sui-button @click.native="increase">+</sui-button>
  </div>
</template>

<script>
export default {
  name: 'AttachedProgressExample',
  data() {
    return { percent: 43 };
  },
  computed: {
    label() {
      return `${this.percent}% Funded`;
    },
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
