<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label>
        <img src="static/images/avatar/small/elliot.jpg" />
      </sui-feed-label>
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
      <sui-feed-label image="static/images/avatar/small/helen.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <sui-feed-date>4 days ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            1 Like
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/jenny.jpg" />
      <sui-feed-content>
        <sui-feed-summary
          date="2 Days Ago"
          user="Jenny Hess"
          content=" add you as a friend"
        />
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            8 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/joe.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>Joe Henderson</a> posted on his page
          <sui-feed-date>3 days ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            5 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/justen.jpg" />
      <sui-feed-content>
        <sui-feed-summary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <sui-feed-date>4 days ago</sui-feed-date>
        </sui-feed-summary>
        <sui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </sui-feed-extra>
        <sui-feed-meta>
          <sui-feed-like>
            <sui-icon name="like" />
            41 Likes
          </sui-feed-like>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'FeedExample',
};
</script>
