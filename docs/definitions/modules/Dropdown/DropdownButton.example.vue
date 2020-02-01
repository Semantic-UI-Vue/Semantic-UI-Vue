<template lang="html">
  <div id="app">
    <sui-dropdown
      class="labeled
    icon"
      icon="file"
      button
      text="File"
    >
      <sui-dropdown-menu>
        <sui-dropdown-item>New</sui-dropdown-item>
        <sui-dropdown-item
          >Open... <span class="description">ctrl + o</span></sui-dropdown-item
        >
        <sui-dropdown-item
          >Save as...
          <span class="description">ctrl + s</span></sui-dropdown-item
        >
        <sui-dropdown-item
          >Rename <span class="description">ctrl + r</span></sui-dropdown-item
        >
        <sui-dropdown-item>Make a copy</sui-dropdown-item>
        <sui-dropdown-item
          ><sui-icon name="folder" />Move to folder</sui-dropdown-item
        >
        <sui-dropdown-item
          ><sui-icon name="trash" />Move to trash</sui-dropdown-item
        >
        <sui-dropdown-divider />
        <sui-dropdown-item>Download as...</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownButtonExample',
};
</script>
