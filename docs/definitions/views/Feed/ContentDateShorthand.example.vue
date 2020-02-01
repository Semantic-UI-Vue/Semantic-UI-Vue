<template lang="html">
  <sui-feed>
    <sui-feed-event :image="image" :date="date" :summary="summary" />
    <sui-feed-event>
      <sui-feed-label :image="image" />
      <sui-feed-content :date="date" :summary="summary" />
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ContentDateShorthandExample',
  data() {
    return {
      image: 'static/images/avatar/small/jenny.jpg',
      date: '3 days ago',
      summary: 'You added Jenny Hess to your coworker group.',
    };
  },
};
</script>
