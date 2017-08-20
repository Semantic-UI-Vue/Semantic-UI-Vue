<template>
  <h1>{this.component}</h1>
</template>

<script>
export default {
  name: 'Example',
  props: {
    type: String,
    component: String,
  }
}
</script>
