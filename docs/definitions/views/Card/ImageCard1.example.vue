<template lang="html">
  <div>
    <sui-card>
      <sui-reveal animated="move">
        <sui-reveal-content visible>
          <sui-image src="static/images/avatar/large/jenny.jpg" />
        </sui-reveal-content>
        <sui-reveal-content hidden>
          <sui-image src="static/images/avatar/large/elliot.jpg" />
        </sui-reveal-content>
      </sui-reveal>
      <sui-card-content>
        <sui-card-header>Team Fu &amp; Hess</sui-card-header>
        <sui-card-meta>Create in Sep 2014</sui-card-meta>
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="users" />
        2 Members
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'ImageCard1Example',
};
</script>
