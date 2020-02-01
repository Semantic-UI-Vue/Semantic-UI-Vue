<template lang="html">
  <sui-form>
    <sui-form-fields fields="three">
      <sui-form-field>
        <label>First name</label>
        <input type="text" placeholder="First name" />
      </sui-form-field>
      <sui-form-field>
        <label>Middle name</label>
        <input type="text" placeholder="Middle name" />
      </sui-form-field>
      <sui-form-field>
        <label>Last name</label>
        <input type="text" placeholder="Last name" />
      </sui-form-field>
    </sui-form-fields>
  </sui-form>
</template>

<script>
export default {
  name: 'GroupEvenlyDividedExample',
};
</script>
