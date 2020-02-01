<template lang="html">
  <div>
    <sui-card-group :items-per-row="3" stackable>
      <sui-card>
        <sui-image src="static/images/avatar/large/elliot.jpg" />
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/helen.jpg" />
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/jenny.jpg" />
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/veronika.jpg" />
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/stevie.jpg" />
      </sui-card>
      <sui-card>
        <sui-image src="static/images/avatar/large/steve.jpg" />
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'StackableCardExample',
};
</script>
