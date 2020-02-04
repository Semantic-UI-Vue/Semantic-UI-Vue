<template lang="html">
  <div>
    <sui-button @click.native="toggle">Show Modal</sui-button>
    <sui-modal v-model="open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
        <sui-image
          wrapped
          size="medium"
          src="static/images/avatar/large/rachel.png"
        />
        <sui-modal-description>
          <sui-header>Default Profile Image</sui-header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="toggle">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
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

<style lang="css"></style>
