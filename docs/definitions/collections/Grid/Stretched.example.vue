<template>
  <sui-grid :columns="3" divided>
    <sui-grid-row stretched>
      <sui-grid-column>
        <sui-segment>1</sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment>1</sui-segment>
        <sui-segment>2</sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment>1</sui-segment>
        <sui-segment>2</sui-segment>
        <sui-segment>3</sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'StretchedExample',
};
</script>
