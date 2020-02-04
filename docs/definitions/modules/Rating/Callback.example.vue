<template lang="html">
  <div>
    <sui-rating :rating="value" :max-rating="5" @rate="handleRate" />
    <pre>{{ formattedPayload }}</pre>
  </div>
</template>

<script>
export default {
  name: 'CallbackExample',
  data() {
    return {
      value: 1,
      payload: {},
    };
  },
  computed: {
    formattedPayload() {
      return JSON.stringify(this.payload, null, 2);
    },
  },
  methods: {
    handleRate(evt, props) {
      this.value = props.rating;
      this.payload = props;
    },
  },
};
</script>

<style lang="css"></style>
