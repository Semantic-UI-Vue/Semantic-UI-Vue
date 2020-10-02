<template lang="html">
  <div>
    <sui-message info dismissable>
      <sui-message-header>
        Was this what you wanted?
      </sui-message-header>
      <ul class="list">
        <li>It's good to see you again.</li>
        <li>Did you know it's been a while?</li>
      </ul>
    </sui-message>
  </div>
</template>

<script>
export default {
  name: 'InfoMessageExample',
};
</script>
