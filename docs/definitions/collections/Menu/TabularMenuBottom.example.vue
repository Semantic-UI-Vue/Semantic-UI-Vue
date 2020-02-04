<template lang="html">
  <div>
    <sui-segment attached="top">
      <docs-wireframe name="paragraph" />
    </sui-segment>

    <sui-menu attached="bottom" tabular>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :key="item"
        :active="isActive(item)"
        @click="select(item)"
      >
        {{ item }}
      </a>

      <sui-menu-menu position="right">
        <a is="sui-menu-item" :active="isActive('new')" @click="select('new')">
          <sui-icon name="add" />
          New Tab
        </a>
      </sui-menu-menu>
    </sui-menu>
  </div>
</template>

<script>
export default {
  name: 'TabularMenuBottomExample',
  data() {
    return {
      items: ['Active Project', 'Project #2', 'Project #3'],
      active: 'Active Project',
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
