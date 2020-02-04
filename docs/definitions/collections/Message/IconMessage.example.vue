<template lang="html">
  <div>
    <sui-message
      icon="inbox"
      header="Have you heard about our mailing list?"
      content="Get the best news in your e-mail every day."
    />

    <sui-message icon>
      <sui-icon name="circle notched" loading />
      <sui-message-content>
        <sui-message-header>Just one second</sui-message-header>
        We are fetching that content for you.
      </sui-message-content>
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'IconMessageExample',
};
</script>
