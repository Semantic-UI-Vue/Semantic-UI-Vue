<template>
  <div>
    <template v-for="user in users">
      <sui-popup :key="user.name" :content="user.bio" :header="user.name">
        <sui-image :src="user.avatar" avatar slot="trigger" />
      </sui-popup>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: 'Elliot Fu',
          bio: 'Elliot has been a member since July 2012',
          avatar: 'static/images/avatar/small/elliot.jpg',
        },
        {
          name: 'Stevie Feliciano',
          bio: 'Stevie has been a member since August 2013',
          avatar: 'static/images/avatar/small/stevie.jpg',
        },
        {
          name: 'Matt',
          bio: 'Matt has been a member since July 2014',
          avatar: 'static/images/avatar/small/matt.jpg',
        },
      ],
    };
  },
};
</script>
