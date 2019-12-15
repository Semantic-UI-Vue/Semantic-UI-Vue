<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label>
        <sui-image :src="imageSrc" />
      </sui-feed-label>
      <sui-feed-content>
        <sui-feed-date>3 days ago</sui-feed-date>
        <sui-feed-summary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ContentDateExample',
  data() {
    return {
      imageSrc: 'static/images/avatar/small/jenny.jpg',
    };
  },
};
</script>
