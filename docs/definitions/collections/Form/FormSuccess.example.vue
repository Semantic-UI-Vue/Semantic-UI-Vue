<template lang="html">
  <sui-form success>
    <sui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </sui-form-field>
    <sui-message success>
      <sui-message-header>Form Completed</sui-message-header>
      <p>
        You're all signed up for the newsletter.
      </p>
    </sui-message>
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'FormSuccessExample',
};
</script>
