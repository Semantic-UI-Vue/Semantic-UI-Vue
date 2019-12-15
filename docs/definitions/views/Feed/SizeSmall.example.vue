<template lang="html">
  <sui-feed size="small">
    <h4 is="sui-header">Followers Activity</h4>

    <sui-feed-event>
      <sui-feed-content>
        <sui-feed-summary>
          <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-content>
        <sui-feed-summary>
          <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-content>
        <sui-feed-summary>
          <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-content>
        <sui-feed-summary>
          <a>Christian Rocha</a> signed up for the site.
        </sui-feed-summary>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'SizeSmallExample',
};
</script>
