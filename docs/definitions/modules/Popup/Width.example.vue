<template>
  <div>
    <sui-popup>
      <sui-icon slot="trigger" circular name="heart" />
      Hello. This is a regular pop-up which does not allow for lots of content.
      You cannot fit a lot of words here as the paragraphs will be pretty
      narrow.
    </sui-popup>
    <sui-popup wide>
      <sui-icon slot="trigger" circular name="heart" />
      Hello. This is a wide pop-up which allows for lots of content with
      additional space. You can fit a lot of words here and the paragraphs will
      be pretty wide.
    </sui-popup>
    <sui-popup wide="very">
      <sui-icon slot="trigger" circular name="heart" />
      Hello. This is a very wide pop-up which allows for lots of content with
      additional space. You can fit a lot of words here and the paragraphs will
      be pretty wide.
    </sui-popup>
  </div>
</template>

<script>
export default {};
</script>
