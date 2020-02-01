<template>
  <div>
    <component-head :component-name="componentName" :type="type" :tab="tab" />
    <definitions :component-name="componentName" :type="type" v-if="!tab" />
    <api :component-name="componentName" :type="type" v-if="tab === 'api'" />
  </div>
</template>

<script>
import ComponentHead from './ComponentHead';
import Definitions from './Definitions/Definitions';
import Api from './Api/Api';

export default {
  name: 'SuiComponent',
  components: {
    ComponentHead,
    Definitions,
    Api,
  },
  props: {
    componentName: String,
    type: String,
    tab: {
      type: String,
    },
  },
};
</script>
