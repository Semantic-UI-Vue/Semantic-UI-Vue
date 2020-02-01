<template lang="html">
  <sui-form size="large">
    <sui-form-fields fields="two">
      <sui-form-field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </sui-form-field>
      <sui-form-field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </sui-form-field>
    </sui-form-fields>
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'FormSizeVariationLargeExample',
};
</script>
