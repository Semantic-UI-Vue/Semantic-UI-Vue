<template lang="html">
  <div>
    <sui-segment>
      <sui-checkbox label="visible" v-model="visible" />
    </sui-segment>
    <sui-sidebar-pushable>
      <sui-menu
        is="sui-sidebar"
        :visible="visible"
        animation="overlay"
        width="thin"
        icon="labeled"
        inverted
        vertical
      >
        <router-link is="sui-menu-item" to="/">
          <sui-icon name="home" /> Home
        </router-link>
        <router-link is="sui-menu-item" to="/">
          <sui-icon name="gamepad" /> Games
        </router-link>
        <router-link is="sui-menu-item" to="/">
          <sui-icon name="camera" /> Channels
        </router-link>
      </sui-menu>
      <sui-sidebar-pusher>
        <sui-segment>
          <h3 is="sui-header">Application Content</h3>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-sidebar-pusher>
    </sui-sidebar-pushable>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      visible: false,
    };
  },
};
</script>
