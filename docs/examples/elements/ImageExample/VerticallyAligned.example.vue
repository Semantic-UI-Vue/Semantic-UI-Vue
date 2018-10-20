<template>
  <div>
    <sui-image :src="src" size="tiny" vertical-align="top" />
    <span>Top Aligned</span>
    <sui-divider />
    <sui-image :src="src" size="tiny" vertical-align="middle" />
    <span>Middle Aligned</span>
    <sui-divider />
    <sui-image :src="src" size="tiny" vertical-align="bottom" />
    <span>Bottom Aligned</span>
  </div>
</template>

<script>
export default {
  data() {
    return { src: 'static/images/wireframes/image.png' };
  },
};
</script>
