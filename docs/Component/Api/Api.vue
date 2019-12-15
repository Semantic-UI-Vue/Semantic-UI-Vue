<template>
  <div>
    <docs-rail :title="title" />
    <docs-body :elements="subComponents">
      <template v-slot="subComponent">
        <h4 is="sui-header" class="api-h4">Props</h4>
        <api-table class="table" :fields="propsFields" :data="subComponent.props" />

        <template v-if="subComponent.events">
          <h4 is="sui-header" class="api-h4">Events</h4>
          <api-table class="table" :fields="propsFields" :data="subComponent.events" />
        </template>

        <template v-if="subComponent.slots">
          <h4 is="sui-header" class="api-h4">Slots</h4>
          <api-table class="table" :fields="propsFields" :data="subComponent.slots" />
        </template>
      </template>
    </docs-body>
  </div>
</template>

<script>
import * as SemanticUIVue from 'semantic-ui-vue';
import upperFirst from 'lodash/upperFirst';
import ApiTable from './ApiTable.vue';

function getProps(component) {
  const props = component.props;
  return Object.keys(props)
    .map(propName => ({
      name: propName,
      type: props[propName].type.name,
      description: props[propName].description,
      default: props[propName].default,
    }));
}

function getEvents(component) {
  const events = component.meta && component.meta.events;
  return events ? Object.keys(events)
    .map(name => ({
      name,
      description: events[name].description,
      value: events[name].value.name,
    })) : null;
}

function getSlots(component) {
  const slots = component.meta && component.meta.slots;
  return slots ? Object.keys(slots)
    .map(name => ({
      name,
      description: slots[name].description,
      props: slots.props ? JSON.stringify(slots.props, true, 2) : '',
    })) : null;
}

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
        )
        .map(Component => ({
          name: Component.name,
          props: getProps(Component),
          events: getEvents(Component),
          slots: getSlots(Component),
        }));
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
