<template lang="html">
  <div>
    <sui-card-group :itemsPerRow="6" class="doubling">
      <sui-card>
        <sui-image src="static/images/avatar/large/elliot.jpg"></sui-image>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/helen.jpg"></sui-image>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/jenny.jpg"></sui-image>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/veronika.jpg"></sui-image>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/stevie.jpg"></sui-image>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/steve.jpg"></sui-image>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'DoublingCardExample',
};
</script>
