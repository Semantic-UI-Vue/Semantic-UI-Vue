<template lang="html">
  <div>
    <sui-message negative>
      <sui-icon name="close" />
      <sui-message-header>
        We're sorry, we can't apply that discount
      </sui-message-header>
      <p>That offer has expired.</p>
    </sui-message>

    <sui-message error>
      <sui-icon name="close" />
      <sui-message-header>
        There were some errors with your submission
      </sui-message-header>
      <sui-list bulleted>
        <sui-list-item>
          You must include both upper and lower case letters in your password.
        </sui-list-item>
        <sui-list-item>
          You need to select your home country.
        </sui-list-item>
      </sui-list>
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'NegativeMessageExample',
};
</script>
