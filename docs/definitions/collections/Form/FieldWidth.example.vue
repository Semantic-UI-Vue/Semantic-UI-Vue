<template lang="html">
  <sui-form>
    <sui-form-field>
      <sui-form-fields>
        <sui-form-field width="six">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
        </sui-form-field>
        <sui-form-field width="four">
          <label>Middle</label>
          <input type="text" placeholder="Middle Name" />
        </sui-form-field>
        <sui-form-field width="six">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </sui-form-field>
      </sui-form-fields>
      <sui-form-fields>
        <sui-form-field width="two">
          <input type="text" placeholder="2 Wide" />
        </sui-form-field>
        <sui-form-field width="twelve">
          <input type="text" placeholder="12 Wide" />
        </sui-form-field>
        <sui-form-field width="two">
          <input type="text" placeholder="2 Wide" />
        </sui-form-field>
      </sui-form-fields>
      <sui-form-fields>
        <sui-form-field width="eight">
          <input type="text" placeholder="8 Wide" />
        </sui-form-field>
        <sui-form-field width="six">
          <input type="text" placeholder="6 Wide" />
        </sui-form-field>
        <sui-form-field width="two">
          <input type="text" placeholder="2 Wide" />
        </sui-form-field>
      </sui-form-fields>
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'FieldWidthExample',
};
</script>
