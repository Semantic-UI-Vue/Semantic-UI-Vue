<template lang="html">
  <div>
    <sui-breadcrumb>
      <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
      <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
      <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
      <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
      <sui-breadcrumb-section active
        >Personal Information</sui-breadcrumb-section
      >
    </sui-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'DividerExample',
};
</script>
