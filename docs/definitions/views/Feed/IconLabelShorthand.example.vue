<template lang="html">
  <sui-feed>
    <sui-feed-event
      icon="pencil"
      date="Today"
      summary="You posted on your friend Stevie Feliciano's wall."
    />

    <sui-feed-event>
      <sui-feed-label icon="pencil" />
      <sui-feed-content
        date="Today"
        summary="You posted on your friend Stevie Feliciano's wall."
      />
    </sui-feed-event>
  </sui-feed>
</template>

<script>
export default {
  name: 'IconLabelShorthandExample',
};
</script>
