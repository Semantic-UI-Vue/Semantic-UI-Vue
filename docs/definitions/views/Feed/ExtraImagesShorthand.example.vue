<template lang="html">
  <sui-feed>
    <sui-feed-event
      :image="image"
      :date="date"
      :summary="summary"
      :extra-images="extraImages"
    />

    <sui-feed-event>
      <sui-feed-label :image="image" />
      <sui-feed-content
        :date="date"
        :summary="summary"
        :extra-images="extraImages"
      />
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label :image="image" />
      <sui-feed-content>
        <sui-feed-date :content="date" />
        <sui-feed-summary :content="summary" />
        <sui-feed-extra :images="extraImages" />
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesShorthandExample',
  data() {
    return {
      image: 'static/images/avatar/small/helen.jpg',
      date: '3 days ago',
      summary: 'Helen Troy added 2 photos',
      extraImages: [
        'static/images/wireframes/image.png',
        'static/images/wireframes/image-text.png',
      ],
    };
  },
};
</script>
