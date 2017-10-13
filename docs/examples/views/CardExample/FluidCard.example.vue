<template lang="html">
  <div>
    <sui-grid :columns="3">
      <sui-grid-column>
        <sui-card class="fluid">
          <sui-image src="static/images/avatar/large/daniel.jpg" />
          <sui-card-content>
            <sui-card-header>Daniel Louise</sui-card-header>
          </sui-card-content>
        </sui-card>
      </sui-grid-column>
      <sui-grid-column>
        <sui-card class="fluid">
          <sui-image src="static/images/avatar/large/helen.jpg" />
          <sui-card-content>
            <sui-card-header>Helen Troy</sui-card-header>
          </sui-card-content>
        </sui-card>
      </sui-grid-column>
      <sui-grid-column>
        <sui-card class="fluid">
          <sui-image src="static/images/avatar/large/elliot.jpg" />
          <sui-card-content>
            <sui-card-header>Elliot Fu</sui-card-header>
          </sui-card-content>
        </sui-card>
      </sui-grid-column>
    </sui-grid>
  </div>
</template>

<script>
export default {
  name: 'FluidCardExample',
};
</script>
