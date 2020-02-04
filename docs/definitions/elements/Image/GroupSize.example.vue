<template>
  <div>
    <sui-image-group size="tiny">
      <sui-image :src="src" />
      <sui-image :src="src" />
      <sui-image :src="src" />
      <sui-image :src="src" />
    </sui-image-group>
    <sui-divider hidden />
    <sui-image-group size="small">
      <sui-image :src="src" />
      <sui-image :src="src" />
      <sui-image :src="src" />
      <sui-image :src="src" />
    </sui-image-group>
  </div>
</template>

<script>
export default {
  data() {
    return { src: 'static/images/wireframes/image.png' };
  },
};
</script>
