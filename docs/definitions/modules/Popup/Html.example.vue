<template>
  <div>
    <sui-popup>
      <sui-popup-header>User Rating</sui-popup-header>
      <sui-popup-content>
        <sui-rating icon="star" :default-rating="3" :max-rating="4" />
      </sui-popup-content>

      <sui-card slot="trigger">
        <sui-image src="static/images/movies/totoro-horizontal.jpg" />
        <sui-card-content>
          <sui-card-header>My Neighbor Totoro</sui-card-header>
          <sui-card-description>
            Two sisters move to the country with their father in order to be
            closer to their hospitalized mother, and discover the surrounding
            trees are inhabited by magical spirits.
          </sui-card-description>
        </sui-card-content>
      </sui-card>
    </sui-popup>
  </div>
</template>

<script>
export default {};
</script>
