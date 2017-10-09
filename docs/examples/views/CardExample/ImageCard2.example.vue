<template lang="html">
  <div>
    <sui-card-group :itemsPerRow="3">
      <sui-card>
         <sui-image
          src="static/images/avatar/large/elliot.jpg"
          is="sui-dimmer-dimmable"
          @mouseover.native="isActive[0] = true"
          @mouseleave.native="isActive[0] = false"
        >
        <sui-dimmer blurring :active="isActive[0]">
          <sui-button inverted>Add Friend</sui-button>
        </sui-dimmer>
      </sui-image>
        <sui-card-content>
          <sui-card-header>Team Fu</sui-card-header>
          <sui-card-meta>Create in Sep 2014</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="users" /> 2 Members
          </sui-card-content>
      </sui-card>
      <sui-card>
         <sui-image
          src="static/images/avatar/large/jenny.jpg"
          is="sui-dimmer-dimmable"
          @mouseover.native="isActive[1] = true"
          @mouseleave.native="isActive[1] = false"
        >
        <sui-dimmer blurring inverted :active="isActive[1]">
          <sui-button primary>Add Friend</sui-button>
        </sui-dimmer>
      </sui-image>
        <sui-card-content>
          <sui-card-header>Team Hess</sui-card-header>
          <sui-card-meta>Create in Aug 2014</sui-card-meta>
        </sui-card-content>
        <sui-card-content extra>
          <sui-icon name="users" /> 2 Members
          </sui-card-content>
      </sui-card>
    </sui-card-group>

  </div>
</template>

<script>
export default {
  name: 'ImageCard2Example',
  data() {
    return { isActive: [] };
  },
};
</script>
