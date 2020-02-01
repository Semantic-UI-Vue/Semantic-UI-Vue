<template lang="html">
  <sui-segment inverted>
    <sui-form inverted>
      <sui-form-fields fields="two">
        <sui-form-field>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </sui-form-field>
        <sui-form-field>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </sui-form-field>
      </sui-form-fields>
      <sui-form-field inline>
        <sui-checkbox label="I agree to the Terms and Conditions" />
      </sui-form-field>
      <sui-button type="submit">Submit</sui-button>
    </sui-form>
  </sui-segment>
</template>

<script>
export default {
  name: 'FormInvertedExample',
};
</script>
