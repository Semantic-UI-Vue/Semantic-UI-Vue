<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label>
        <sui-image src="static/images/avatar/small/jenny.jpg" />
      </sui-feed-label>
      <sui-feed-content>
        <sui-feed-summary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          <sui-feed-date>3 days ago</sui-feed-date>
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'SummaryDateExample',
};
</script>
