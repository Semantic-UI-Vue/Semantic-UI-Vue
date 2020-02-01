<template>
  <sui-grid :columns="2">
    <sui-grid-column>
      <sui-image fluid src="static/images/wireframes/image.png">
        <a is="sui-label" color="black" icon="hotel" slot="label" ribbon>
          Hotel
        </a>
      </sui-image>
    </sui-grid-column>

    <sui-grid-column>
      <sui-image fluid src="static/images/wireframes/image.png">
        <a is="sui-label" color="blue" icon="spoon" slot="label" ribbon>
          Hotel
        </a>
      </sui-image>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {};
</script>
