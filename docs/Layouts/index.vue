<template lang="html">
  <div>
    <div is="sui-segment" basic padded>
      <h1 is="sui-header">
        Layouts
        <p is="sui-header-subheader">Examples of using Semantic UI React</p>
      </h1>
    </div>

    <div is="sui-segment" basic padded>
      <h2 is="sui-header">
        Starter
        <p is="sui-header-subheader">Examples to introduce components and their function</p>
      </h2>

      <div is="sui-card-group" :widths="3" stackable>
        <router-link to="/layouts/theming" is="sui-card">
          <sui-image href="static/images/layouts/theming.png" />
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>
