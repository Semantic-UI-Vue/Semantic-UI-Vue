<template lang="html">
  <div>
    <sui-message warning>
      <sui-icon name="close" />
      <sui-message-header>
        You must register before you can do that!
      </sui-message-header>
      Visit our registration page, then try again.
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'WarningMessageExample',
};
</script>
