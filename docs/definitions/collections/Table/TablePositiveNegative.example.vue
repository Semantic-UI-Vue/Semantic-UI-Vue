<template lang="html">
  <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
        <sui-table-header-cell>Notes</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>No Name Specified</sui-table-cell>
        <sui-table-cell>Unknown</sui-table-cell>
        <sui-table-cell negative>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row positive>
        <sui-table-cell>Jimmy</sui-table-cell>
        <sui-table-cell>
          <sui-icon name="check" />
          Approved
        </sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Jamie</sui-table-cell>
        <sui-table-cell>Unknown</sui-table-cell>
        <sui-table-cell positive>
          <sui-icon name="close" />
          Requires call
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row negative>
        <sui-table-cell>Jill</sui-table-cell>
        <sui-table-cell>Unknown</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TablePositiveNegativeExample',
};
</script>
