<template>
  <sui-grid :columns="2">
    <sui-grid-column>
      <sui-segment raised>
        <a is="sui-label" color="red" ribbon>
          Overview
        </a>
        <span>Account Details</span>

        <docs-wireframe name="paragraph" />

        <a is="sui-label" color="blue" ribbon>
          Community
        </a>
        <span>User Reviews</span>

        <docs-wireframe name="paragraph" />
      </sui-segment>
    </sui-grid-column>

    <sui-grid-column>
      <sui-segment>
        <a is="sui-label" color="orange" ribbon="right">
          Specs
        </a>
        <docs-wireframe name="paragraph" />

        <a is="sui-label" color="teal" ribbon="right">
          Reviews
        </a>
        <docs-wireframe name="paragraph" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {};
</script>
