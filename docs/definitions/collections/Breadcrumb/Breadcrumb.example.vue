<template lang="html">
  <div>
    <div>
      <sui-breadcrumb>
        <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
        <sui-breadcrumb-divider />
        <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
        <sui-breadcrumb-divider />
        <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
      </sui-breadcrumb>
    </div>

    <sui-breadcrumb :sections="sections" />
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbExample',
  data() {
    return {
      sections: [
        { key: 'home', content: 'Home', link: true },
        { key: 'store', content: 'Store', link: true },
        { key: 'tshirt', content: 'T-Shirt', active: true },
      ],
    };
  },
};
</script>
