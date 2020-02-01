<template lang="html">
  <sui-form>
    <sui-form-fields inline>
      <sui-form-field width="eight">
        <label>Name</label>
        <input type="text" placeholder="First Name" />
      </sui-form-field>
      <sui-form-field width="three">
        <input type="text" placeholder="Middle Name" />
      </sui-form-field>
      <sui-form-field width="five">
        <input type="text" placeholder="Last Name" />
      </sui-form-field>
    </sui-form-fields>
  </sui-form>
</template>

<script>
export default {
  name: 'FormFields3Example',
};
</script>
