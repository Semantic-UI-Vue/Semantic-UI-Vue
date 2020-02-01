<template lang="html">
  <sui-form>
    <sui-form-field>
      <select v-model="current" placeholder="Gender">
        <option disabled value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'FormHTMLSelectExample',
  data() {
    return {
      current: '',
    };
  },
};
</script>
