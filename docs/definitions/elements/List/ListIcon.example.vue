<template lang="html">
  <sui-list>
    <!-- As components -->
    <sui-list-item>
      <sui-list-icon name="users" />
      <sui-list-content>Semantic UI</sui-list-content>
    </sui-list-item>

    <!-- As Prop -->
    <sui-list-item icon="marker" content="New York, NY" />

    <!-- Both -->
    <sui-list-item icon="mail">
      <sui-list-content>
        <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
      </sui-list-content>
    </sui-list-item>

    <sui-list-item icon="linkify">
      <sui-list-content>
        <a href="http://www.semantic-ui.com">semantic-ui.com</a>
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</template>

<script>
export default {
  name: 'ListIconExample',
};
</script>
