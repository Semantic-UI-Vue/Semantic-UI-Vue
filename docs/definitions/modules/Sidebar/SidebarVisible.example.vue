<template lang="html">
  <sui-sidebar-pushable>
    <sui-menu
      is="sui-sidebar"
      :visible="true"
      animation="overlay"
      width="thin"
      icon="labeled"
      inverted
      vertical
    >
      <sui-menu-item to="/"> <sui-icon name="home" /> Home </sui-menu-item>
      <sui-menu-item to="/"> <sui-icon name="gamepad" /> Games </sui-menu-item>
      <sui-menu-item to="/">
        <sui-icon name="camera" /> Channels
      </sui-menu-item>
    </sui-menu>
    <sui-sidebar-pusher>
      <sui-segment>
        <h3 is="sui-header">Application Content</h3>
        <docs-wireframe name="paragraph" />
      </sui-segment>
    </sui-sidebar-pusher>
  </sui-sidebar-pushable>
</template>

<script>
export default {
  name: 'SidebarVisible',
};
</script>
