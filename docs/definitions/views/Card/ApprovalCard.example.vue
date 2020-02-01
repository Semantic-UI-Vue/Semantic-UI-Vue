<template lang="html">
  <div>
    <sui-card>
      <sui-card-content>
        <sui-card-header
          >Cute Dog
          <sui-icon class="right floated" size="small" name="like" />
          <sui-icon class="right floated" size="small" name="star" />
        </sui-card-header>
        <sui-image src="static/images/wireframes/paragraph.png" />
      </sui-card-content>
      <sui-card-content extra>
        <span> <sui-icon name="heart" /> Like </span>
        <span slot="right"> <sui-icon name="star" /> Favorite </span>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: 'ApprovalCardExample',
};
</script>
