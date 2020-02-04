<template>
  <div>
    <sui-button @click="toggleDisabled">Toggle Disabled Tab</sui-button>

    <sui-divider hidden />

    <sui-tab>
      <sui-tab-pane title="Circle">
        Circle
      </sui-tab-pane>
      <sui-tab-pane title="Box">
        Box
      </sui-tab-pane>
      <sui-tab-pane title="Secret Triangle" :disabled="disabled">
        Secret Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'DisabledExample',
  data: () => ({
    disabled: true,
  }),
  methods: {
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
  },
};
</script>
