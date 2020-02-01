<template lang="html">
  <div>
    <div class="single-example">
      <sui-statistic horizontal>
        <sui-statistic-value>2,204</sui-statistic-value>
        <sui-statistic-label>Views</sui-statistic-label>
      </sui-statistic>
    </div>
    <div class="single-example">
      <sui-statistics-group horizontal>
        <sui-statistic in-group>
          <sui-statistic-value>22</sui-statistic-value>
          <sui-statistic-label>Faves</sui-statistic-label>
        </sui-statistic>
        <sui-statistic in-group>
          <sui-statistic-value>31,200</sui-statistic-value>
          <sui-statistic-label>Views</sui-statistic-label>
        </sui-statistic>
        <sui-statistic in-group>
          <sui-statistic-value>22</sui-statistic-value>
          <sui-statistic-label>Members</sui-statistic-label>
        </sui-statistic>
      </sui-statistics-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticHorizontalExample',
};
</script>

<style>
.single-example {
  padding: 20px 0;
}
</style>
