<template>
  <div>
    <sui-label v-for="size in sizes" :size="size" :key="size">
      {{ size }}
    </sui-label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: [
        'mini',
        'tiny',
        'small',
        'medium',
        'large',
        'big',
        'huge',
        'massive',
      ],
    };
  },
};
</script>
