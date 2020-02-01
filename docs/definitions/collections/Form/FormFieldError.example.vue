<template lang="html">
  <sui-form>
    <sui-form-fields fields="two">
      <sui-form-field error>
        <label>First Name</label>
        <input placeholder="First Name" type="text" />
      </sui-form-field>
      <sui-form-field>
        <label>Last Name</label>
        <input placeholder="Last Name" type="text" />
      </sui-form-field>
    </sui-form-fields>
    <sui-form-field error>
      <label>Gender</label>
      <sui-dropdown
        placeholder="Gender"
        selection
        :options="options"
        v-model="current"
      />
    </sui-form-field>
    <sui-form-field inline error>
      <sui-checkbox label="I agree to the Terms and Conditions" />
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'FormFieldErrorExample',
  data() {
    return {
      current: null,
      options: [
        {
          text: 'Male',
          value: 1,
        },
        {
          text: 'Female',
          value: 2,
        },
      ],
    };
  },
};
</script>
