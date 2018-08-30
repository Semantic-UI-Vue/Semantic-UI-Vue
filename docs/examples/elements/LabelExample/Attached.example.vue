<template>
  <sui-grid :columns="3">
    <sui-grid-row>
      <sui-grid-column>
        <sui-segment padded>
          <sui-label attached="top">HTML</sui-label>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment padded>
          <sui-label attached="bottom">CSS</sui-label>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment padded>
          <sui-label attached="top right">Code</sui-label>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
    </sui-grid-row>

    <sui-grid-row>
      <sui-grid-column>
        <sui-segment padded>
          <sui-label attached="top left">View</sui-label>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment padded>
          <sui-label attached="bottom left">User View</sui-label>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment padded>
          <sui-label attached="bottom right">Admin View</sui-label>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {};
</script>
