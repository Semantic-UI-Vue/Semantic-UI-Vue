<template lang="html">
  <div>
    <sui-search placeholder="Common passwords..." icon="search" />
    <sui-message :content="message" />
  </div>
</template>

<script>
export default {
  name: 'SearchExample',
  data() {
    return {
      valueBasic: null,
      valueSelectIcon: null,
      message:
        'Using a ui input allows you to use additional input types, like this icon input',
    };
  },
};
</script>

<style lang="css"></style>
