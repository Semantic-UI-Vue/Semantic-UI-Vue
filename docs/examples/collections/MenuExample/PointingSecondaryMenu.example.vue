<template>
  <div>
    <sui-menu pointing secondary>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <sui-menu-menu position="right">
        <a
          is="sui-menu-item"
          :active="isActive('Logout')"
          content="Logout"
          @click="select('Logout')"
        />
      </sui-menu-menu>
    </sui-menu>

    <sui-segment>
      <docs-wireframe name="media-paragraph" />
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'PointingMenuSecondaryExample',
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
