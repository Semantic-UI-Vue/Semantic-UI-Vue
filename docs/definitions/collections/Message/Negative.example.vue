<template lang="html">
  <div>
    <sui-message negative dismissable>
      <sui-message-header>
        We're sorry, we can't apply that discount
      </sui-message-header>
      <p>That offer has expired.</p>
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'NegativeMessageExample',
};
</script>
