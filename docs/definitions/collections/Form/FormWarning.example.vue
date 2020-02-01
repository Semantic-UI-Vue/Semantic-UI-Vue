<template lang="html">
  <sui-form warning>
    <sui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </sui-form-field>
    <sui-message warning>
      <sui-message-header>Could you check something!</sui-message-header>
      <sui-message-list>
        <sui-message-item>
          That e-mail has been subscribed, but you have not yet clicked the
          verification link in your e-mail.
        </sui-message-item>
      </sui-message-list>
    </sui-message>
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'FormWarningExample',
};
</script>
