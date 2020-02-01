<template lang="html">
  <div>
    <sui-accordion is="sui-menu" :active-index="1" vertical exclusive styled>
      <sui-accordion-title is="sui-menu-header" active>
        <sui-icon name="dropdown" />
        Size
      </sui-accordion-title>
      <sui-accordion-content active>
        <sui-form>
          <sui-form-field>
            <sui-checkbox label="Small" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Medium" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Large" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="X-Large" />
          </sui-form-field>
        </sui-form>
      </sui-accordion-content>
      <sui-accordion-title is="sui-menu-header">
        <sui-icon name="dropdown" />
        Colors
      </sui-accordion-title>
      <sui-accordion-content>
        <sui-form>
          <sui-form-field>
            <sui-checkbox label="Red" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Orange" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Green" />
          </sui-form-field>
          <sui-form-field>
            <sui-checkbox label="Blue" />
          </sui-form-field>
        </sui-form>
      </sui-accordion-content>
    </sui-accordion>
  </div>
</template>

<script>
export default {
  name: 'AccordionMenu',
};
</script>
