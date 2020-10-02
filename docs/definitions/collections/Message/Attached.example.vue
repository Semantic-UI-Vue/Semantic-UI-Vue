<template lang="html">
  <div>
    <sui-message attached>
      <sui-message-header>
        Welcome to our site!
      </sui-message-header>
      <p>Fill out the form below to sign up for a new account.</p>
    </sui-message>
    <sui-form is="sui-segment" attached>
      <sui-form-fields equalWidth>
        <sui-form-field>
          <label>First Name</label>
          <sui-input placeholder="First Name" />
        </sui-form-field>
        <sui-form-field>
          <label>Last Name</label>
          <sui-input placeholder="Last Name" />
        </sui-form-field>
      </sui-form-fields>
      <sui-form-field>
        <label>Username</label>
        <sui-input placeholder="Username" />
      </sui-form-field>
      <sui-form-field>
        <label>Password</label>
        <sui-input type="password" />
      </sui-form-field>
      <sui-form-field inline>
        <sui-checkbox label="I agree to the terms and conditions" />
      </sui-form-field>
      <sui-button color="blue" content="Submit" type="submit" />
    </sui-form>
    <sui-message warning attached="bottom">
      <sui-icon name="help" />
      Already signed up? <a href="#">Login here</a> instead.
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'AttachedMessageExample',
};
</script>
