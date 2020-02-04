<template lang="html">
  <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Edit</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>No Action</sui-table-cell>
        <sui-table-cell selectable>
          <a href="#">Edit</a>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Approved</sui-table-cell>
        <sui-table-cell selectable>
          <a href="#">Edit</a>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Denied</sui-table-cell>
        <sui-table-cell selectable>
          <a href="#">Edit</a>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row warning>
        <sui-table-cell>John</sui-table-cell>
        <sui-table-cell>No Action</sui-table-cell>
        <sui-table-cell selectable>
          <a href="#">Requires change</a>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell positive>Approved</sui-table-cell>
        <sui-table-cell positive selectable>
          <a href="#">Approve</a>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell negative>Denied</sui-table-cell>
        <sui-table-cell selectable negative>
          <a href="#">Remove</a>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableSelectableCellExample',
};
</script>
