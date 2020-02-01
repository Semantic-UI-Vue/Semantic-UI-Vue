<template lang="html">
  <sui-feed :events="events" />
</template>

<script>
export default {
  name: 'FeedShorthandExample',
  data() {
    return {
      events: [
        {
          date: '1 Hour Ago',
          image: 'static/images/avatar/small/elliot.jpg',
          meta: '4 Likes',
          summary: 'Elliot Fu added you as a friend',
        },
        {
          date: '4 days ago',
          image: 'static/images/avatar/small/helen.jpg',
          meta: '1 Like',
          summary: 'Helen Troy added 2 new illustrations',
          extraImages: [
            'static/images/wireframes/image.png',
            'static/images/wireframes/image-text.png',
          ],
        },
        {
          date: '3 days ago',
          image: 'static/images/avatar/small/joe.jpg',
          meta: '8 Likes',
          summary: 'Joe Henderson posted on his page',
          extraText:
            'Ours is a life of constant reruns.' +
            " We're always circling back to where we'd we started.",
        },
        {
          date: '4 days ago',
          image: 'static/images/avatar/small/justen.jpg',
          meta: '41 Likes',
          summary: 'Justen Kitsune added 2 new photos of you',
          extraText:
            'Look at these fun pics I found from a few years ago. Good times.',
          extraImages: [
            'static/images/wireframes/image.png',
            'static/images/wireframes/image-text.png',
          ],
        },
      ],
    };
  },
};
</script>
