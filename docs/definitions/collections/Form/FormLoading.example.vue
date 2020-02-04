<template lang="html">
  <sui-form loading>
    <sui-form-field>
      <label>E-mail</label>
      <input type="email" placeholder="joe@schmoe.com" />
    </sui-form-field>
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  name: 'FormLoadingExample',
};
</script>
