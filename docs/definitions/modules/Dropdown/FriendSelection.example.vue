<template lang="html">
  <sui-dropdown
    fluid
    placeholder="Select Friend"
    selection
    :options="options"
    v-model="current"
  />
</template>

<script>
export default {
  name: 'FriendSelectionExample',
  data() {
    return {
      current: null,
      options: [
        {
          key: 'Jenny Hess',
          text: 'Jenny Hess',
          value: 'Jenny Hess',
          image: { avatar: true, src: 'static/images/avatar/small/jenny.jpg' },
        },
        {
          key: 'Elliot Fu',
          text: 'Elliot Fu',
          value: 'Elliot Fu',
          image: { avatar: true, src: 'static/images/avatar/small/elliot.jpg' },
        },
        {
          key: 'Stevie Feliciano',
          text: 'Stevie Feliciano',
          value: 'Stevie Feliciano',
          image: { avatar: true, src: 'static/images/avatar/small/stevie.jpg' },
        },
        {
          key: 'Christian',
          text: 'Christian',
          value: 'Christian',
          image: {
            avatar: true,
            src: 'static/images/avatar/small/christian.jpg',
          },
        },
        {
          key: 'Matt',
          text: 'Matt',
          value: 'Matt',
          image: { avatar: true, src: 'static/images/avatar/small/matt.jpg' },
        },
        {
          key: 'Justen Kitsune',
          text: 'Justen Kitsune',
          value: 'Justen Kitsune',
          image: { avatar: true, src: 'static/images/avatar/small/justen.jpg' },
        },
      ],
    };
  },
};
</script>
