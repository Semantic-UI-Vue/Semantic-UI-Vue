<template lang="html">
  <div id="app">
    <sui-dropdown text="Options" button pointing>
      <sui-dropdown-menu>
        <sui-dropdown-item>Settings</sui-dropdown-item>
        <sui-dropdown-item>Manage apps</sui-dropdown-item>
        <sui-dropdown-item>Help</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownPointingExample',
};
</script>
