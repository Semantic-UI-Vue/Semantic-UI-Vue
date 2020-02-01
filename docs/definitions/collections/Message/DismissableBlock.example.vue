<template lang="html">
  <div>
    <transition name="fade">
      <sui-message
        v-if="visible"
        header="Welcome back!"
        content="This is a special notification which you can dismiss."
        dismissable
        @dismiss="handleDismiss"
      />
    </transition>
    <p v-if="!visible">
      Message will come back in 2s
    </p>
  </div>
</template>

<script>
export default {
  name: 'DismissableBlockExample',
  data() {
    return { visible: true };
  },
  methods: {
    handleDismiss() {
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
      }, 2000);
    },
  },
};
</script>

<style media="screen" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
