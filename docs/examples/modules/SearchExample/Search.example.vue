<template lang="html">
  <div>
    <sui-search
            placeholder="Search animal..."
            :source="source"
            v-model="value"/>
  </div>
</template>

<script>
export default {
  name: 'SearchExample',
  data() {
    return {
      value: null,
      source: [{ title: 'Horse', description: 'asd' }, { title: 'Parrot' }, { title: 'Cat' }, { title: 'Catfish' }],
    };
  },
};
</script>
