<template>
  <sui-grid :columns="2" relaxed="very" stackable vertical-align="middle">
    <sui-grid-column>
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input
              type="text"
              placeholder="Username"
              autocomplete="off"
              :style="`background-image: url(${image});`"
            />
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input
              type="password"
              autocomplete="off"
              :style="`background-image: url(${image});`"
            />
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui blue submit button">Login</div>
      </div>
    </sui-grid-column>

    <sui-divider vertical>Or</sui-divider>

    <sui-grid-column>
      <div class="center aligned column">
        <div class="ui big green labeled icon button">
          <i class="signup icon"></i>
          Sign Up
        </div>
      </div>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'VerticalDivider2',
  data() {
    return {
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
    };
  },
};
</script>
