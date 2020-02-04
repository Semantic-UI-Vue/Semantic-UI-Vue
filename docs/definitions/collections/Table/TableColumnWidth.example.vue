<template lang="html">
  <sui-table>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell :width="10">Name</sui-table-header-cell>
        <sui-table-header-cell :width="6">Status</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
    <sui-table-footer>
      <sui-table-header-cell>3 People</sui-table-header-cell>
      <sui-table-header-cell>2 Approved</sui-table-header-cell>
    </sui-table-footer>
  </sui-table>
</template>

<script>
export default {
  name: 'TableColumnWidthExample',
};
</script>
