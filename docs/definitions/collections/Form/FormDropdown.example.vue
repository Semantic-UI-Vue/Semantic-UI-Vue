<template lang="html">
  <sui-form>
    <sui-form-field>
      <label>Gender</label>
      <sui-dropdown
        placeholder="Gender"
        selection
        :options="options"
        v-model="current"
      />
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'FormDropdownExample',
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
