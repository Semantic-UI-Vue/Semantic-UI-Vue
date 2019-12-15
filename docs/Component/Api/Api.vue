<template>
  <div>
    <docs-rail :title="title" />
    <docs-body :elements="subComponents">
      <template v-slot="subComponent">
        <h4 is="sui-header" class="api-h4">Props</h4>
        <api-table class="table" :fields="propsFields" :data="getProps(subComponent)" />
      </template>
    </docs-body>
  </div>
</template>

<script>
import * as SemanticUIVue from 'semantic-ui-vue';
import upperFirst from 'lodash/upperFirst';
import ApiTable from './ApiTable.vue';

export default {
  components: {
    ApiTable,
  },
  props: {
    componentName: String,
    type: String,
  },
  data() {
    return {
      propsFields: [
        { key: 'name', text: 'Prop' },
        { key: 'description', text: 'Description' },
        { key: 'type', text: 'Type' },
        { key: 'default', text: 'Default' },
      ],
      eventsFields: [
        { key: 'name', text: 'Event' },
        { key: 'description', text: 'Description' },
        { key: 'value', text: 'Value' },
      ],
    };
  },
  computed: {
    title() {
      return upperFirst(this.componentName);
    },
    suiName() {
      return `Sui${this.title}`;
    },
    subComponents() {
      return Object.keys(SemanticUIVue)
        .map(componentName => SemanticUIVue[componentName])
        .filter(Component =>
          Component.name === this.suiName ||
          (Component.meta && Component.meta.parent === this.suiName)
        );
    },
  },
  methods: {
    getProps(subComponent) {
      const props = subComponent.props;
      return Object.keys(props)
        .map(propName => ({
          name: propName,
          type: props[propName].type.name,
          description: props[propName].description,
          default: props[propName].default,
        }))
    },
  },
}
</script>

<style scoped>
.api-h4 {
  font-size: 18px !important;
  margin: 0em 0em 0em !important;
}

.table {
  margin-bottom: 3em !important;
}
</style>
