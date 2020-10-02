<template lang="html">
  <div>
    <sui-message error dismissable>
      <sui-message-header>
        There were some errors with your submission
      </sui-message-header>
      <ul class="list">
        <li>
          You must include both upper and lower case letters in your password.
        </li>
        <li>You need to select your home country.</li>
      </ul>
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessageExample',
};
</script>
