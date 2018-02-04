<template lang="html">
  <sui-dropdown placeholder="Gender" selection :options="options" />
</template>

<script>
export default {
  name: 'SelectionElement',
  data() {
    return {
      options: [{
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
      },
      {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/assets/images/avatar/small/elliot.jpg' },
      },
      {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/assets/images/avatar/small/stevie.jpg' },
      },
      {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/assets/images/avatar/small/christian.jpg' },
      },
      {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: '/assets/images/avatar/small/matt.jpg' },
      },
      {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: '/assets/images/avatar/small/justen.jpg' },
      }],
    };
  },
};
</script>
