<template lang="html">
  <div>
    <sui-search
      :min-characters="3"
      placeholder="Search animal..."
      :source="source"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchExample',
  data() {
    return {
      value: null,
      source: [
        { name: 'Horse' },
        { name: 'Parrot' },
        { name: 'Cat' },
        { name: 'Catfish' },
      ],
    };
  },
};
</script>
