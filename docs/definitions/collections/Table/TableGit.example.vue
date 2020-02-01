<template lang="html">
  <sui-table celled striped>
    <sui-table-header>
      <sui-table-row>
        <sui-table-headerCell colspan="3">Git Repository</sui-table-headerCell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row>
        <sui-table-cell collapsing>
          <sui-icon name="folder" /> node_modules
        </sui-table-cell>
        <sui-table-cell>Initial commit</sui-table-cell>
        <sui-table-cell collapsing text-align="right"
          >10 hours ago</sui-table-cell
        >
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell> <sui-icon name="folder" /> test </sui-table-cell>
        <sui-table-cell>Initial commit</sui-table-cell>
        <sui-table-cell text-align="right">10 hours ago</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell> <sui-icon name="folder" /> build </sui-table-cell>
        <sui-table-cell>Initial commit</sui-table-cell>
        <sui-table-cell text-align="right">10 hours ago</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-icon name="file outline" /> package.json
        </sui-table-cell>
        <sui-table-cell>Initial commit</sui-table-cell>
        <sui-table-cell text-align="right">10 hours ago</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-icon name="file outline" /> Gruntfile.js
        </sui-table-cell>
        <sui-table-cell>Initial commit</sui-table-cell>
        <sui-table-cell text-align="right">10 hours ago</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  name: 'SuiTableGitExample',
};
</script>
