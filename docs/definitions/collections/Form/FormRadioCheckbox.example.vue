<template lang="html">
  <sui-form>
    <sui-form-fields inline>
      <label for="fruit">Select your favorite fruit:</label>
      <sui-form-field>
        <sui-checkbox radio name="fruit" label="Apples" value="1" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio name="fruit" label="Oranges" value="2" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio name="fruit" label="Pears" value="3" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio name="fruit" label="Grapefruit" value="4" />
      </sui-form-field>
    </sui-form-fields>
    <sui-form-fields grouped>
      <label for="second_fruit">Select your second favorite fruit:</label>
      <sui-form-field>
        <sui-checkbox radio name="second_fruit" label="Apples" value="1" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio name="second_fruit" label="Oranges" value="2" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio name="second_fruit" label="Pears" value="3" />
      </sui-form-field>
      <sui-form-field>
        <sui-checkbox radio name="second_fruit" label="Grapefruit" value="4" />
      </sui-form-field>
    </sui-form-fields>
  </sui-form>
</template>

<script>
export default {
  name: 'FormRadioCheckboxExample',
};
</script>
