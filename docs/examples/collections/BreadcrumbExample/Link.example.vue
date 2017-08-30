<template lang="html">
  <div>
    <sui-breadcrumb>
      <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
      <sui-breadcrumb-divider />
      <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
      <sui-breadcrumb-divider icon="right chevron" />
      <sui-breadcrumb-section active>
        Search for:
        <a href="javascript:void 0">paper towels</a>
      </sui-breadcrumb-section>
    </sui-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'LinkExample',
};
</script>
