<template lang="html">
  <div>
    <sui-segment>
      <sui-form>
        <sui-form-field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </sui-form-field>
        <sui-form-field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </sui-form-field>
        <sui-form-field>
          <sui-accordion>
            <a is="sui-accordion-title">
              <sui-icon name="dropdown" />
              Optional Details
            </a>
            <sui-accordion-content>
              <label>Maiden Name</label>
              <input placeholder="Maiden Name" />
            </sui-accordion-content>
          </sui-accordion>
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
      </sui-form>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'FormFieldsAccordion',
};
</script>
