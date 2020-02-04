<template lang="html">
  <div>
    <sui-card-group :items-per-row="4">
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="2" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="3" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="3" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="3" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
        </sui-card-content>
      </sui-card>
      <sui-card>
        <sui-image src="static/images/wireframes/image.png" />
        <sui-card-content extra>
          Rating: <sui-rating icon="star" :max-rating="4" :rating="4" />
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
