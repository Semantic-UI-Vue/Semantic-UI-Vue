<template lang="html">
  <sui-form>
    <sui-form-field required>
      <label>Last name</label>
      <input type="text" placeholder="Last name" />
    </sui-form-field>
    <sui-form-field required inline>
      <sui-checkbox label="I agree to the Terms and Conditions" />
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'FieldRequiredExample',
};
</script>
