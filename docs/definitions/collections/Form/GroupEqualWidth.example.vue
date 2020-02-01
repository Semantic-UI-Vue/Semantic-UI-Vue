<template lang="html">
  <sui-form>
    <sui-form-fields>
      <sui-form-field>
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </sui-form-field>
      <sui-form-field>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </sui-form-field>
    </sui-form-fields>
    <sui-form-fields equal-width>
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
  name: 'GroupEqualWidthExample',
};
</script>
