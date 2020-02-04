<template lang="html">
  <div>
    <div is="sui-segment" basic padded>
      <h1 is="sui-header">
        Layouts
        <p is="sui-header-subheader">Examples of using Semantic UI Vue</p>
      </h1>
    </div>

    <div is="sui-segment" basic padded>
      <h2 is="sui-header">
        Starter
        <p is="sui-header-subheader">
          Examples to introduce components and their function
        </p>
      </h2>

      <div is="sui-card-group" :widths="3" stackable>
        <router-link to="/layouts/theming" is="sui-card">
          <sui-image src="static/images/layouts/theming.png" />
          <sui-card-content>
            <sui-card-header>Theming</sui-card-header>
            <sui-card-description>
              Examples of many common UI components, useful for testing custom
              themes.
            </sui-card-description>
          </sui-card-content>
        </router-link>
      </div>
    </div>

    <div is="sui-segment" basic padded>
      <h2 is="sui-header">
        Pages
        <p is="sui-header-subheader">Starter page templates</p>
      </h2>

      <div is="sui-card-group" :widths="3" stackable>
        <router-link to="/layouts/login" is="sui-card">
          <sui-image src="static/images/layouts/login.png" />
          <sui-card-content>
            <sui-card-header>Login Form</sui-card-header>
            <sui-card-description>
              A full-screen login form
            </sui-card-description>
          </sui-card-content>
        </router-link>
      </div>

      <div is="sui-card-group" :widths="3" stackable>
        <router-link to="/layouts/fixed_menu" is="sui-card">
          <sui-image src="static/images/layouts/fixed_menu.png" />
          <sui-card-content>
            <sui-card-header>Fixed Menu</sui-card-header>
            <sui-card-description>
              An example layout with a fixed menu at the top
            </sui-card-description>
          </sui-card-content>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
