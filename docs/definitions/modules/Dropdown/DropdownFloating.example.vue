<template lang="html">
  <div id="app">
    <sui-dropdown class="teal" text="Save" button floating>
      <sui-dropdown-menu>
        <sui-dropdown-item><sui-icon name="edit" />Edit Post</sui-dropdown-item>
        <sui-dropdown-item
          ><sui-icon name="delete" />Remove Post</sui-dropdown-item
        >
        <sui-dropdown-item><sui-icon name="hide" />Hide Post</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownFloatingExample',
};
</script>
