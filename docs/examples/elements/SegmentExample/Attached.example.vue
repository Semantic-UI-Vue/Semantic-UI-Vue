<template lang="html">
  <div>
    <sui-segment attached="top">
      <p>This segment is on top</p>
    </sui-segment>
    <sui-segment attached>
      <p>This segment is attached on both sides</p>
    </sui-segment>
    <sui-segment attached="bottom">
      <p>This segment is on bottom</p>
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'AttachedExample',
};
</script>
