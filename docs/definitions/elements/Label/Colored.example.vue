<template>
  <div>
    <sui-label v-for="color in colors" :color="color" :key="color">
      {{ color }}
    </sui-label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black',
      ],
    };
  },
};
</script>
