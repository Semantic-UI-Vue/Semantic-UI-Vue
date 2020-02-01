<template lang="html">
  <div>
    <sui-button color="red" content="Like" icon="heart">
      <a is="sui-label" slot="label" basic color="red" pointing="left">
        2,048
      </a>
    </sui-button>

    <sui-button basic color="blue" content="Fork" icon="fork">
      <a is="sui-label" slot="label" basic color="blue" pointing="left">
        1,048
      </a>
    </sui-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonLabeledBasicExample',
};
</script>
