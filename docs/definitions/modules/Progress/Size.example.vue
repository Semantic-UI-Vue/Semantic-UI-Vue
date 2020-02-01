<template lang="html">
  <div>
    <sui-message info>
      Some small sizes may not be able to fit an inlined label
    </sui-message>
    <sui-progress size="tiny" label="Tiny" />
    <sui-progress size="small" label="Small" />
    <sui-progress size="standard" label="Standard" />
    <sui-progress size="large" label="Large" />
    <sui-progress size="big" label="Big" />
  </div>
</template>

<script>
export default {
  name: 'SizeProgressExample',
};
</script>
