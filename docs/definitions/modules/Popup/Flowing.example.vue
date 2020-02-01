<template>
  <div>
    <sui-popup flowing hoverable>
      <sui-grid centered divided :columns="3">
        <sui-grid-column text-align="center">
          <h4 is="sui-header">Basic Plan</h4>
          <p><b>2</b> projects, $10 a month</p>
          <sui-button>Choose</sui-button>
        </sui-grid-column>
        <sui-grid-column text-align="center">
          <h4 is="sui-header">Business Plan</h4>
          <p><b>5</b> projects, $20 a month</p>
          <sui-button>Choose</sui-button>
        </sui-grid-column>
        <sui-grid-column text-align="center">
          <h4 is="sui-header">Premium Plan</h4>
          <p><b>8</b> projects, $25 a month</p>
          <sui-button>Choose</sui-button>
        </sui-grid-column>
      </sui-grid>
      <sui-button slot="trigger">Show flowing popup</sui-button>
    </sui-popup>
  </div>
</template>

<script>
export default {};
</script>
