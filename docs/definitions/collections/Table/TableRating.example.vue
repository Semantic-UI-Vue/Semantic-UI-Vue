<template lang="html">
  <sui-table celled padded>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell single-line
          >Evidence Rating</sui-table-header-cell
        >
        <sui-table-header-cell>Effect</sui-table-header-cell>
        <sui-table-header-cell>Efficacy</sui-table-header-cell>
        <sui-table-header-cell>Consensus</sui-table-header-cell>
        <sui-table-header-cell>Comments</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>
          <h2 is="sui-header" text-align="center">A</h2>
        </sui-table-cell>
        <sui-table-cell single-line>Power Output</sui-table-cell>
        <sui-table-cell>
          <sui-rating icon="star" :rating="3" :max-rating="3" />
        </sui-table-cell>
        <sui-table-cell text-align="right">
          80% <br />
          <a href="#">18 studies</a>
        </sui-table-cell>
        <sui-table-cell>
          Creatine supplementation is the reference compound for increasing
          muscular creatine levels; there is variability in this increase,
          however, with some nonresponders.
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <h2 is="sui-header" text-align="center">A</h2>
        </sui-table-cell>
        <sui-table-cell single-line>Weight</sui-table-cell>
        <sui-table-cell>
          <sui-rating icon="star" :rating="3" :max-rating="3" />
        </sui-table-cell>
        <sui-table-cell text-align="right">
          100% <br />
          <a href="#">65 studies</a>
        </sui-table-cell>
        <sui-table-cell>
          Creatine is the reference compound for power improvement, with numbers
          from one meta-analysis to assess potency
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableRatingExample',
};
</script>
