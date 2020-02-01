<template lang="html">
  <div id="app">
    <sui-dropdown class="icon" icon="wrench" button pointing="bottom left">
      <sui-dropdown-menu>
        <sui-dropdown-item>New</sui-dropdown-item>
        <sui-dropdown-item>Save As</sui-dropdown-item>
        <sui-dropdown-item>Edit</sui-dropdown-item>
      </sui-dropdown-menu>
    </sui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownPointingWithPositionExample',
};
</script>
