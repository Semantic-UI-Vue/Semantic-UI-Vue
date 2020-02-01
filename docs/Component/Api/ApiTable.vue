<template>
  <sui-table celled definition sortable>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell v-for="field in fields" :key="field.key">
          {{ field.text }}
        </sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="(row, index) in data" :key="index">
        <sui-table-cell v-for="field in fields" :key="field.key">
          {{ row[field.key] }}
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
export default {
  props: {
    fields: Array,
    data: Array,
  },
};
</script>
