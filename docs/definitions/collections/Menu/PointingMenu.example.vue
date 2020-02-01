<template>
  <div>
    <sui-menu pointing>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>

    <sui-segment>
      <docs-wireframe name="paragraph" />
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'PointingMenuExample',
  data() {
    return {
      active: 'Home',
      items: ['Home', 'Messages', 'Friends'],
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
