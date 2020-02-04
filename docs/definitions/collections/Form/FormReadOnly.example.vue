<template lang="html">
  <sui-form>
    <sui-form-fields fields="two">
      <sui-form-field>
        <label>First Name</label>
        <input placeholder="Read Only" readonly type="text" />
      </sui-form-field>
      <sui-form-field>
        <label>Last Name</label>
        <input placeholder="Read Only" readonly type="text" />
      </sui-form-field>
    </sui-form-fields>
  </sui-form>
</template>

<script>
export default {
  name: 'FormReadOnlyExample',
};
</script>
