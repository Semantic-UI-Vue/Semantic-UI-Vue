<template lang="html">
  <div>
    <sui-breadcrumb>
      <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
      <sui-breadcrumb-divider icon="right chevron" />
      <sui-breadcrumb-section link>Registration</sui-breadcrumb-section>
      <sui-breadcrumb-divider icon="right arrow" />
      <sui-breadcrumb-section active
        >Personal Information</sui-breadcrumb-section
      >
    </sui-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'DividerArrowExample',
};
</script>
