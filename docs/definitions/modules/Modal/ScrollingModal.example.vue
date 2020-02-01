<template lang="html">
  <div>
    <sui-button @click.native="toggle">Show Modal</sui-button>
    <sui-modal v-model="open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content scrolling image>
        <sui-image
          wrapped
          size="medium"
          src="static/images/avatar/large/rachel.png"
        />
        <sui-modal-description>
          <sui-header>Default Profile Image</sui-header>
          <template v-for="n in 10">
            <docs-wireframe :key="n" name="short-paragraph" />
          </template>
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
  name: 'ScrollingModalExample',
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
