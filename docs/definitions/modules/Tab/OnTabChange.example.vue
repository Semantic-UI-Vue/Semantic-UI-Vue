<template>
  <div>
    <p>
      Control active pane from outside,
      <template>
        <a href="#" v-if="table.index !== 0" @click.prevent="activatePane(0)"
          >Circle</a
        >
        <span v-else>Circle</span> </template
      >,
      <template>
        <a href="#" v-if="table.index !== 1" @click.prevent="activatePane(1)"
          >Box</a
        >
        <span v-else>Box</span> </template
      >,
      <template>
        <a href="#" v-if="table.index !== 2" @click.prevent="activatePane(2)"
          >Triangle</a
        >
        <span v-else>Triangle</span> </template
      >,
    </p>

    <sui-divider hidden />

    <sui-table fixed compact="very">
      <sui-table-body>
        <sui-table-row>
          <sui-table-cell>Index</sui-table-cell>
          <sui-table-cell>{{ table.index }}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>Label</sui-table-cell>
          <sui-table-cell>{{ table.title }}</sui-table-cell>
        </sui-table-row>
        <sui-table-row>
          <sui-table-cell>Clicked on the Tab Pane</sui-table-cell>
          <sui-table-cell
            ><code>{{ table.inside }}</code></sui-table-cell
          >
        </sui-table-row>
      </sui-table-body>
    </sui-table>

    <sui-divider hidden />

    <sui-tab @change="handleChange" :active-index="activeIndex">
      <sui-tab-pane title="Circle">
        Circle
      </sui-tab-pane>
      <sui-tab-pane title="Box">
        Box
      </sui-tab-pane>
      <sui-tab-pane title="Triangle">
        Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'OnTabChangeExample',
  data: () => ({
    table: {
      inside: null,
      index: null,
      name: null,
    },
    activeIndex: null,
  }),
  mounted() {
    this.activatePane(1);
  },
  methods: {
    activatePane(index) {
      this.table.index = +index;
      this.activeIndex = +index;
    },
    handleChange(e, activePane, index) {
      this.table.inside = !!e;
      this.table.index = +index;
      this.table.title = activePane.title;
    },
  },
};
</script>
