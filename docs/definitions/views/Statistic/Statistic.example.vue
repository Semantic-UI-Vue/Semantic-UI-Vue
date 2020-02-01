<template lang="html">
  <div>
    <div class="single-example">
      <sui-statistic>
        <sui-statistic-value>5,550</sui-statistic-value>
        <sui-statistic-label>Downloads</sui-statistic-label>
      </sui-statistic>
    </div>

    <div class="single-example">
      <sui-statistic>
        <sui-statistic-label>Downloads</sui-statistic-label>
        <sui-statistic-value>5,550</sui-statistic-value>
      </sui-statistic>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticExample',
};
</script>

<style>
.single-example {
  padding: 20px 0;
}
</style>
