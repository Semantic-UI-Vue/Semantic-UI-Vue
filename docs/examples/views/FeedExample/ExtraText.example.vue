<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/laura.jpg" />
      <sui-feed-content>
        <sui-feed-date>3 days ago</sui-feed-date>
        <sui-feed-summary>
          <a>Laura Faucet</a> created a post
        </sui-feed-summary>
        <sui-feed-extra text>
          Have you seen what's going on in Israel? Can you believe it.
        </sui-feed-extra>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ExtraTextExample',
};
</script>
