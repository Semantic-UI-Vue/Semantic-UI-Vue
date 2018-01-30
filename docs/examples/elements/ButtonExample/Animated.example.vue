<template lang="html">
  <div>
    <sui-button animated>
      <sui-button-content visible>Next</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="right arrow" />
      </sui-button-content>
    </sui-button>

    <sui-button animated="vertical">
      <sui-button-content hidden>Shop</sui-button-content>
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
    </sui-button>

    <sui-button animated="fade">
      <sui-button-content visible>
        Sign-up for a Pro account
      </sui-button-content>
      <sui-button-content hidden>
        $12.99 a month
      </sui-button-content>
    </sui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonAnimatedExample',
};
</script>
