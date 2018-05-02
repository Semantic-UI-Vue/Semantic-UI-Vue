<template lang="html">
  <div>
    <sui-menu attached="top">
      <sui-dropdown item icon="wrench" simple>
        <sui-dropdown-menu>
          <sui-dropdown-item>
            <sui-icon name="dropdown" />
            <span className="text">New</span>

            <sui-dropdown-menu>
              <sui-dropdown-item>Document</sui-dropdown-item>
              <sui-dropdown-item>Image</sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown-item>
          <sui-dropdown-item>Open</sui-dropdown-item>
          <sui-dropdown-item>Save...</sui-dropdown-item>
          <sui-dropdown-item>Edit Permissions</sui-dropdown-item>
          <sui-dropdown-divider />
          <sui-dropdown-header>Export</sui-dropdown-header>
          <sui-dropdown-item>Share</sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>

      <sui-menu-menu position="right">
        <sui-menu-item right>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>

    <sui-segment attached="bottom">
      <docs-wireframe name="paragraph" />
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'MenuExample',
};
</script>
