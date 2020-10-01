<template lang="html">
  <div>
    <sui-message positive>
      <sui-icon name="close" />
      <sui-message-header>
        You are eligible for a reward
      </sui-message-header>
      <p>Go to your <b>special offers</b> page to see now.</p>
    </sui-message>

    <sui-message success>
      <sui-icon name="close" />
      <sui-message-header>
        Your user registration was successful.
      </sui-message-header>
      <p>You may now log in with the username you have chosen.</p>
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'PositiveMessageExample',
};
</script>
