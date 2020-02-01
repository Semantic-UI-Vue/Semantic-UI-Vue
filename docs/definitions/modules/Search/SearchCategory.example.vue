<template lang="html">
  <div>
    <sui-search
      placeholder="Search animal..."
      :source="source"
      :min-characters="1"
      v-model="value"
      category
    />
  </div>
</template>

<script>
export default {
  name: 'SearchCategoryExample',
  data() {
    return {
      value: null,
      source: [
        { name: 'Camel', category: 'Mammal', description: 'Camel description' },
        {
          name: 'Canary',
          category: 'Bird',
          description: 'Cannary description',
        },
        { name: 'Cat', category: 'Mammal' },
        { name: 'Catfish', category: 'Fish' },
      ],
    };
  },
};
</script>
