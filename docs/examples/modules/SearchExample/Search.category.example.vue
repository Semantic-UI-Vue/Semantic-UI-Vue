<template lang="html">
  <div>
    <sui-search
            placeholder="Search animal..."
            :source="source"
            :min-characters="1"
            v-model="value"
            category />
  </div>
</template>

<script>
export default {
  name: 'SearchCategoryExample',
  data() {
    return {
      value: null,
      source: [
        { title: 'Camel', category: 'Mammal', description: 'Camel description' },
        { title: 'Canary', category: 'Bird', description: 'Cannary description' },
        { title: 'Cat', category: 'Mammal' },
        { title: 'Catfish', category: 'Fish' },
      ],
    };
  },
};
</script>
