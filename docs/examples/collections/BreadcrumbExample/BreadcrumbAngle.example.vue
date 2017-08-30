<template lang="html">
  <div>
    <div>
      <sui-breadcrumb>
        <sui-breadcrumb-section link>Home</sui-breadcrumb-section>
        <sui-breadcrumb-divider icon="right angle" />
        <sui-breadcrumb-section link>Store</sui-breadcrumb-section>
        <sui-breadcrumb-divider icon="right angle" />
        <sui-breadcrumb-section active>T-Shirt</sui-breadcrumb-section>
      </sui-breadcrumb>
    </div>

    <sui-breadcrumb icon="right angle" :sections="sections" />
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbExampleAngle',
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
