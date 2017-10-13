<template lang="html">
  <div>
    <sui-card-group :itemsPerRow="4">
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="4"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="2"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="3"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="4"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="3"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="3"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="4"></sui-rating>
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png"></sui-image>
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :maxRating="4" :rating="4"></sui-rating>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
  </div>
</template>

<script>
export default {
  name: 'ColumnCountCardExample',
};
</script>
