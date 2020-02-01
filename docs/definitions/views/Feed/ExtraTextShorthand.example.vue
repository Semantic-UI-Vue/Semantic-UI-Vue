<template lang="html">
  <sui-feed>
    <sui-feed-event
      :image="image"
      :date="date"
      :summary="summary"
      :extra-text="extraText"
    />

    <sui-feed-event>
      <sui-feed-label :image="image" />
      <sui-feed-content
        :date="date"
        :summary="summary"
        :extra-text="extraText"
      />
    </sui-feed-event>

    <sui-feed-event>
      <sui-feed-label :image="image" />
      <sui-feed-content>
        <sui-feed-date :content="date" />
        <sui-feed-summary :content="summary" />
        <sui-feed-extra text :content="extraText" />
      </sui-feed-content>
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'ExtraImagesShorthandExample',
  data() {
    return {
      image: 'static/images/avatar/small/laura.jpg',
      date: '3 days ago',
      summary: 'Laura Faucet created a post',
      extraText: "Have you seen what's going on in Israel? Can you believe it.",
    };
  },
};
</script>
