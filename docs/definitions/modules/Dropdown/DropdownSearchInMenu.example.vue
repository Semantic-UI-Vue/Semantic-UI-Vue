<template lang="html">
  <sui-dropdown
    text="Filter Posts"
    icon="filter"
    floating
    labeled
    button
    class="icon"
    v-model="selectedValue"
    :menu-header="menuHeader"
    :search-in-menu="searchInMenu"
    :options="options"
  />
</template>

<script>
export default {
  name: 'DropdownExample',
  data() {
    return {
      menuHeader: {
        icon: '',
        content: 'Header',
      },
      searchInMenu: {
        icon: 'search',
        iconPosition: 'left',
      },
      selectedValue: null,
      options: [
        {
          key: 'Important',
          text: 'Important',
          value: 'Important',
          label: { color: 'red', empty: true, circular: true },
        },
        {
          key: 'Announcement',
          text: 'Announcement',
          value: 'Announcement',
          label: { color: 'blue', empty: true, circular: true },
        },
        {
          key: 'Cannot Fix',
          text: 'Cannot Fix',
          value: 'Cannot Fix',
          label: { color: 'black', empty: true, circular: true },
        },
        {
          key: 'News',
          text: 'News',
          value: 'News',
          label: { color: 'purple', empty: true, circular: true },
        },
        {
          key: 'Enhancement',
          text: 'Enhancement',
          value: 'Enhancement',
          label: { color: 'orange', empty: true, circular: true },
        },
        {
          key: 'Change Declined',
          text: 'Change Declined',
          value: 'Change Declined',
          label: { empty: true, circular: true },
        },
        {
          key: 'Off Topic',
          text: 'Off Topic',
          value: 'Off Topic',
          label: { color: 'yellow', empty: true, circular: true },
        },
        {
          key: 'Interesting',
          text: 'Interesting',
          value: 'Interesting',
          label: { color: 'pink', empty: true, circular: true },
        },
        {
          key: 'Discussion',
          text: 'Discussion',
          value: 'Discussion',
          label: { color: 'green', empty: true, circular: true },
        },
      ],
    };
  },
};
</script>
