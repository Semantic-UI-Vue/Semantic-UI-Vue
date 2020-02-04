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
        <sui-menu-item to="/"> <sui-icon name="home" /> Home </sui-menu-item>
        <sui-menu-item to="/">
          <sui-icon name="gamepad" /> Games
        </sui-menu-item>
        <sui-menu-item to="/">
          <sui-icon name="camera" /> Channels
        </sui-menu-item>
      </sui-menu>
      <sui-sidebar-pusher :dimmed="visible">
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
  name: 'SidebarDimmed',
  data() {
    return {
      visible: false,
    };
  },
};
</script>
