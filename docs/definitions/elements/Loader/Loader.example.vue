<template lang="html">
  <div>
    <sui-message info>
      Loaders are hidden unless has prop<code>active</code> or inside an
      <code>Dimmer active</code>.
    </sui-message>

    <sui-segment>
      <sui-dimmer active>
        <sui-loader />
      </sui-dimmer>

      <docs-wireframe name="short-paragraph" />
    </sui-segment>
  </div>
</template>

<script>
export default {
  name: 'LoaderExample',
};
</script>
