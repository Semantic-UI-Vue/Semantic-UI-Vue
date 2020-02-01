<template>
  <sui-form>
    <sui-form-field>
      <input type="text" placeholder="First name" />
      <sui-label basic color="red" pointing>Please enter a value</sui-label>
    </sui-form-field>
    <sui-divider />

    <sui-form-field>
      <sui-label basic color="red" pointing="below"
        >Please enter a value</sui-label
      >
      <input type="text" placeholder="Last Name" />
    </sui-form-field>
    <sui-divider />

    <sui-form-field inline>
      <input type="text" placeholder="Username" />
      <sui-label basic color="red" pointing="left"
        >That name is taken!</sui-label
      >
    </sui-form-field>
    <sui-divider />

    <sui-form-field inline>
      <sui-label basic color="red" pointing="right">
        Your password must be 6 characters or more
      </sui-label>
      <input type="password" placeholder="Password" />
    </sui-form-field>
  </sui-form>
</template>

<script>
export default {
  name: 'PointingExample',
};
</script>
