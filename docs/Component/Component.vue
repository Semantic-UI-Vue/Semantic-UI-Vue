<template>
  <div>
    <component-head :component-name="componentName" :type="type" :tab="tab" />
    <definitions :component-name="componentName" :type="type" />
  </div>
</template>

<script>
import ComponentHead from './ComponentHead';
import Definitions from './Definitions/Definitions';

export default {
  name: 'SuiComponent',
  components: {
    ComponentHead,
    Definitions,
  },
  props: {
    componentName: String,
    type: String,
    tab: {
      type: String,
      default: 'definitions',
    },
  },
};
</script>
