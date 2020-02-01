<template lang="html">
  <sui-form>
    <sui-form-fields inline>
      <label>How often do you use checkboxes?</label>
      <sui-form-field>
        <sui-checkbox label="Once a week" radio value="1" v-model="value" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox
          label="2-3 times a week"
          radio
          value="2"
          v-model="value"
        />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox label="Once a day" radio value="3" v-model="value" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox label="Twice a day" radio value="4" v-model="value" />
      </sui-form-field>
    </sui-form-fields>
    Value: {{ value }}
  </sui-form>
</template>

<script>
export default {
  name: 'RadioGroupInlineExample',
  data() {
    return {
      value: '1',
    };
  },
};
</script>
