<template lang="html">
  <sui-feed size="large">
    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/elliot.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <sui-feed-user>Elliot Fu</sui-feed-user> added you as a friend
          <sui-feed-date>1 Hour Ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            4 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label icon="pencil" />
      <sui-feed-content>
        <sui-feed-summary>
          You submitted a new post to the page
          <sui-feed-date>3 days ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra text>
          I'm having a BBQ this weekend. Come by around 4pm if you can.
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>11 Likes</sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/helen.jpg" />
      <sui-feed-content>
        <sui-feed-date>4 days ago</sui-feed-date>
        <sui-feed-summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
        </sui-feed-summary>

        <sui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </sui-feed-extra>

        <sui-feed-meta like="1 Like" />
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'SizeLargeExample',
};
</script>
