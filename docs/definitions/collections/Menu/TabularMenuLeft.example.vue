<template lang="html">
  <sui-grid>
    <sui-grid-column :width="4">
      <sui-menu fluid vertical tabular>
        <a
          v-for="item in items"
          :key="item"
          is="sui-menu-item"
          :content="item"
          :active="isActive(item)"
          @click="select(item)"
        />
      </sui-menu>
    </sui-grid-column>

    <sui-grid-column stretched :width="12">
      <sui-segment>
        This is an stretched grid column. This segment will always match the tab
        height
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'TabularMenuExample',
  data() {
    return {
      items: ['Bio', 'Pics', 'Companies', 'Links'],
      active: 'Bio',
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
};
</script>
