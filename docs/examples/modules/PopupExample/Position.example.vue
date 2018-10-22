<template>
  <sui-grid :columns="3" style="width: 600px">
    <sui-grid-row>
      <sui-grid-column>
        <sui-popup
          content="I am positioned to the top left"
          position="top left"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
      <sui-grid-column text-align="center">
        <sui-popup
          content="I am positioned to the top center"
          position="top center"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
      <sui-grid-column text-align="right">
        <sui-popup
          content="I am positioned to the top right"
          position="top right"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column floated="left">
        <sui-popup
          content="I am positioned to the left center"
          position="left center"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
      <sui-grid-column floated="right" text-align="right">
        <sui-popup
          content="I am positioned to the right center"
          position="right center"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <sui-popup
          content="I am positioned to the bottom left"
          position="bottom left"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
      <sui-grid-column text-align="center">
        <sui-popup
          content="I am positioned to the bottom center"
          position="bottom center"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
      <sui-grid-column text-align="right">
        <sui-popup
          content="I am positioned to the bottom right"
          position="bottom right"
        >
          <sui-icon
            slot="trigger"
            name="heart"
            color="red"
            size="large"
            circular
          />
        </sui-popup>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {};
</script>
