<template lang="html">
  <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Header</sui-table-header-cell>
        <sui-table-header-cell>Header</sui-table-header-cell>
        <sui-table-header-cell>Header</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>
          <sui-label ribbon>First</sui-label>
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>

    <sui-table-footer>
      <sui-table-row>
        <sui-table-header-cell colspan="3">
          <sui-menu v-sui-floated:right pagination>
            <a is="sui-menu-item" icon>
              <sui-icon name="left chevron" />
            </a>
            <a is="sui-menu-item">1</a>
            <a is="sui-menu-item">2</a>
            <a is="sui-menu-item">3</a>
            <a is="sui-menu-item">4</a>
            <a is="sui-menu-item" icon>
              <sui-icon name="right chevron" />
            </a>
          </sui-menu>
        </sui-table-header-cell>
      </sui-table-row>
    </sui-table-footer>
  </sui-table>
</template>

<script>
export default {
  name: 'TableExample',
};
</script>
