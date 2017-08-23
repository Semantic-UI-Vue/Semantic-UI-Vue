<template>
  <div>
    <p class="red">
      {{ hello }}
    </p>
    <img src="/static/images/wireframes/short-paragraph.png" />
    <sui-divider />
    <img src="/static/images/wireframes/short-paragraph.png" />
  </div>
</template>

<script>
export default {
  name: 'MyTest',
  data() {
    return {
      hello: 'world',
    };
  },
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
