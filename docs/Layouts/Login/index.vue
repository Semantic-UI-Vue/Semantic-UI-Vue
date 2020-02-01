<template lang="html">
  <div class="background">
    <sui-grid centered vertical-align="middle">
      <sui-grid-column>
        <h2 is="sui-header" color="teal" image>
          <sui-image src="static/images/logo.png" />
          <sui-header-content>Log-in to your account</sui-header-content>
        </h2>

        <sui-form>
          <sui-segment stacked>
            <sui-form-field>
              <sui-input
                type="email"
                placeholder="E-mail address"
                icon="user"
                icon-position="left"
              />
            </sui-form-field>
            <sui-form-field>
              <sui-input
                type="password"
                placeholder="Password"
                icon="lock"
                icon-position="left"
              />
            </sui-form-field>
            <sui-button size="large" color="teal" fluid>Login</sui-button>
          </sui-segment>
        </sui-form>

        <sui-message>New to us? <a href="#">Sign Up</a></sui-message>
      </sui-grid-column>
    </sui-grid>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.background {
  background-color: #dadada !important;
  height: 100vh;
  margin: 1em 0;
}

.grid {
  height: 100%;
}

.column {
  max-width: 450px;
  text-align: center !important;
}
</style>
