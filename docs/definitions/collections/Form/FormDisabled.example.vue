<template lang="html">
  <sui-form>
    <sui-form-fields fields="two">
      <sui-form-field disabled>
        <label>First Name</label>
        <input placeholder="Read Only" readonly type="text" />
      </sui-form-field>
      <sui-form-field disabled>
        <label>Last Name</label>
        <input placeholder="Read Only" readonly type="text" />
      </sui-form-field>
    </sui-form-fields>
  </sui-form>
</template>

<script>
export default {
  name: 'FormDisabledExample',
};
</script>
