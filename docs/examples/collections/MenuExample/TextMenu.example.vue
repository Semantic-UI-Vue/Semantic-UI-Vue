<template lang="html">
  <sui-menu text>
    <sui-menu-item header>Sort By</sui-menu-item>
    <a
      is="sui-menu-item"
      v-for="item in items"
      :key="item"
      :content="item"
      :active="isActive(item)"
      @click="select(item)"
    />
  </sui-menu>
</template>

<script>
export default {
  name: 'TextMenuExample',
  data() {
    return {
      items: ['Closest', 'Most Comments', 'Most Popular'],
      active: 'Closest',
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
