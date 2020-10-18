<template lang="html">
  <sui-table structured celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell rowspan="2">Name</sui-table-header-cell>
        <sui-table-header-cell rowspan="2">Type</sui-table-header-cell>
        <sui-table-header-cell rowspan="2">Files</sui-table-header-cell>
        <sui-table-header-cell colspan="3">Languages</sui-table-header-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-header-cell>Ruby</sui-table-header-cell>
        <sui-table-header-cell>Javascript</sui-table-header-cell>
        <sui-table-header-cell>Python</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Alpha Team</sui-table-cell>
        <sui-table-cell>Project 1</sui-table-cell>
        <sui-table-cell text-align="right">2</sui-table-cell>
        <sui-table-cell text-align="center">
          <sui-icon name="check" color="green" size="large" />
        </sui-table-cell>
        <sui-table-cell />
        <sui-table-cell />
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell rowspan="3">Beta Team</sui-table-cell>
        <sui-table-cell>Project 1</sui-table-cell>
        <sui-table-cell text-align="right">52</sui-table-cell>
        <sui-table-cell text-align="center">
          <sui-icon name="check" color="green" size="large" />
        </sui-table-cell>
        <sui-table-cell />
        <sui-table-cell />
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Project 2</sui-table-cell>
        <sui-table-cell text-align="right">12</sui-table-cell>
        <sui-table-cell />
        <sui-table-cell text-align="center">
          <sui-icon name="check" color="green" size="large" />
        </sui-table-cell>
        <sui-table-cell />
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Project 3</sui-table-cell>
        <sui-table-cell text-align="right">21</sui-table-cell>
        <sui-table-cell text-align="center">
          <sui-icon name="check" color="green" size="large" />
        </sui-table-cell>
        <sui-table-cell />
        <sui-table-cell />
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableStructuredExample',
};
</script>
