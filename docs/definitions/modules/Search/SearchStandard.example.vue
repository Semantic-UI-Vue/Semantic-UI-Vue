<template lang="html">
  <div>
    <sui-search
      placeholder="Search animal..."
      :source="source"
      v-model="valueBasic"
    />
    <sui-message :content="message" />
    <sui-search
      input
      placeholder="Search animal..."
      :source="source"
      v-model="valueSelectIcon"
    >
      <i slot="icon" class="search icon"></i>
    </sui-search>
  </div>
</template>

<script>
export default {
  name: 'SearchExample',
  data() {
    return {
      valueBasic: null,
      valueSelectIcon: null,
      source: [
        { name: 'Horse' },
        { name: 'Parrot' },
        { name: 'Cat' },
        { name: 'Catfish' },
      ],
      message:
        'Using a ui input allows you to use additional input types, like this icon input',
    };
  },
};
</script>

<style lang="css"></style>
