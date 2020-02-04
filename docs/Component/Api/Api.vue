<template>
  <docs-body
    :title="title"
    :elements="subComponents"
    sub-elements-key="sections"
  >
    <template v-slot="bindings">
      <template v-if="bindings.element.data">
        <h4 is="sui-header" :id="bindings.id" class="api-h4">
          {{ bindings.element.name }}
        </h4>
        <api-table
          class="table"
          :fields="bindings.element.fields"
          :data="bindings.element.data"
        />
      </template>
    </template>
  </docs-body>
</template>

<script>
import * as SemanticUIVue from 'semantic-ui-vue';
import upperFirst from 'lodash/upperFirst';
import ApiTable from './ApiTable.vue';

function getProps(component) {
  const props = component.props;
  return Object.keys(props).map(propName => ({
    name: propName,
    type: props[propName].type.name,
    description: props[propName].description,
    default: props[propName].default,
  }));
}

function getEvents(component) {
  const events = component.meta && component.meta.events;
  return events
    ? Object.keys(events).map(name => ({
        name,
        description: events[name].description,
        value:
          typeof events[name].value === 'function'
            ? events[name].value.name
            : events[name].value,
      }))
    : null;
}

function getSlots(component) {
  const slots = component.meta && component.meta.slots;
  return slots
    ? Object.keys(slots).map(name => ({
        name,
        description: slots[name].description,
        props: slots.props ? JSON.stringify(slots.props, true, 2) : '',
      }))
    : null;
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
      slotsFields: [
        { key: 'name', text: 'Event' },
        { key: 'description', text: 'Description' },
        { key: 'props', text: 'Props' },
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
        .filter(
          Component =>
            Component.name === this.suiName ||
            (Component.meta && Component.meta.parent === this.suiName),
        )
        .map(Component => {
          const sections = [];
          const props = getProps(Component);
          const events = getEvents(Component);
          const slots = getSlots(Component);

          if (props) {
            sections.push({
              name: 'Props',
              fields: this.propsFields,
              data: getProps(Component),
            });
          }

          if (events) {
            sections.push({
              name: 'Events',
              fields: this.eventsFields,
              data: getEvents(Component),
            });
          }

          if (slots) {
            sections.push({
              name: 'Slots',
              fields: this.slotsFields,
              data: getSlots(Component),
            });
          }

          return {
            name: Component.name,
            sections,
          };
        });
    },
  },
};
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
