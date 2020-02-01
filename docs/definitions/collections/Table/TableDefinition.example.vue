<template lang="html">
  <sui-table definition>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell />
        <sui-table-header-cell>Arguments</sui-table-header-cell>
        <sui-table-header-cell>Description</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>reset rating</sui-table-cell>
        <sui-table-cell>None</sui-table-cell>
        <sui-table-cell>Resets rating to default value</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>set rating</sui-table-cell>
        <sui-table-cell>rating (integer)</sui-table-cell>
        <sui-table-cell
          >Sets the current star rating to specified value</sui-table-cell
        >
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'TableDefinitionExample',
};
</script>
