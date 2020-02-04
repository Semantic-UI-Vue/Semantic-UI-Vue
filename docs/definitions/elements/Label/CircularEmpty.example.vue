<template>
  <div>
    <sui-label
      v-for="color in colors"
      circular
      :color="color"
      empty
      :key="color"
    />
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
