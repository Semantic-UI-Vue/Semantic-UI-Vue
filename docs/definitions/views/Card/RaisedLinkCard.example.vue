<template lang="html">
  <div>
    <sui-card class="raised link">
      <sui-card-content>
        <sui-card-header>Cute Dog</sui-card-header>
        <sui-card-meta>Animals</sui-card-meta>
        <sui-image src="/static/images/wireframes/paragraph.png" />
      </sui-card-content>
      <sui-card-content extra>
        <span slot="right">
          <sui-image
            src="/static/images/avatar/small/matt.jpg"
            shape="circular"
            size="mini"
          />
          Matt
        </span>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'RaisedLinkCardExample',
};
</script>
