<template lang="html">
  <div>
    <sui-message>
      <sui-message-header>New Site Features</sui-message-header>
      <sui-message-list>
        <sui-message-item>
          You can now have cover images on blog pages
        </sui-message-item>
        <sui-message-item>
          Drafts will now auto-save while writing
        </sui-message-item>
      </sui-message-list>
    </sui-message>

    <sui-message header="New Site Features" :list="list" />
  </div>
</template>

<script>
export default {
  name: 'MessageListExample',
  data() {
    return {
      list: [
        'You can now have cover images on blog pages',
        'Drafts will now auto-save while writing',
      ],
    };
  },
};
</script>
