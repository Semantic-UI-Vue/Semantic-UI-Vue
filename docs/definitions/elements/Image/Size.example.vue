<template>
  <div>
    <sui-image :src="src" size="mini" />
    <sui-divider hidden />
    <sui-image :src="src" size="tiny" />
    <sui-divider hidden />
    <sui-image :src="src" size="small" />
    <sui-divider hidden />
    <sui-image :src="src" size="medium" />
    <sui-divider hidden />
    <sui-image :src="src" size="large" />
    <sui-divider hidden />
    <sui-image :src="src" size="big" />
    <sui-divider hidden />
    <sui-image :src="src" size="huge" />
    <sui-divider hidden />
    <sui-image :src="src" size="massive" />
  </div>
</template>

export default ImageExampleSize

<script>
export default {
  data() {
    return { src: 'static/images/wireframes/image.png' };
  },
};
</script>
