<template lang="html">
  <sui-form error>
    <sui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </sui-form-field>
    <sui-message error>
      <sui-message-header>Action Forbidden</sui-message-header>
      <p>
        You can only sign up for an account once with a given e-mail address.
      </p>
    </sui-message>
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'FormErrorExample',
};
</script>
