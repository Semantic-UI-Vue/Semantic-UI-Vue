<template lang="html">
  <sui-feed>
    <sui-feed-event>
      <sui-feed-label image="static/images/avatar/small/helen.jpg" />
      <sui-feed-content>
        <sui-feed-date>3 days ago</sui-feed-date>
        <sui-feed-summary> <a>Helen Troy</a> added 2 photos </sui-feed-summary>
        <sui-feed-extra images>
          <a><img src="static/images/wireframes/image.png"/></a>
          <a><img src="static/images/wireframes/image.png"/></a>
        </sui-feed-extra>
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesExample',
};
</script>
