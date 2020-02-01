<template>
  <div class="component-body">
    <sui-rail dividing position="right" id="docs-rail">
      <h4 is="sui-header">
        {{ title }}
      </h4>

      <sui-accordion vertical fluid text is="sui-menu">
        <sui-menu-item v-for="(element, i) in elements" :key="i">
          <sui-accordion-title is="sui-menu-header" active>
            {{ element.name }}
            <sui-icon name="dropdown" />
          </sui-accordion-title>
          <sui-accordion-content is="sui-menu" text class="sub-menu">
            <template v-for="(subElement, j) in element[subElementsKey]">
              <router-link
                v-if="subElement.name"
                is="sui-menu-item"
                :to="`#${getId(element, subElement)}`"
                :key="j"
              >
                {{ subElement.name }}
              </router-link>
            </template>
          </sui-accordion-content>
        </sui-menu-item>
      </sui-accordion>
    </sui-rail>
    <template v-for="element in elements">
      <div :key="element.name">
        <h2 is="sui-header" dividing>{{ element.name }}</h2>
        <template v-for="subElement in element[subElementsKey]">
          <slot
            v-bind:id="getId(element, subElement)"
            v-bind:element="subElement"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    elements: Array,
    subElementsKey: String,
    title: String,
  },
  methods: {
    getId(element, subElement) {
      return `${element.name}-${subElement.name}`;
    },
  },
};
</script>

<style scoped>
.component-body {
  position: relative;
  margin-left: 3em !important;
  margin-right: 387px !important;
  max-width: 960px !important;
  padding: 2em 0em 7em;
  width: auto;
}

.ui.dividing.header {
  margin-bottom: 3rem;
}

.example {
  margin: 2em 0em;
  padding: 2em 0em;
  position: relative;
}

.component-body .example:first-child,
.component-body .ui.header + .example {
  margin-top: 0;
}

#docs-rail {
  margin-left: 3em;
  padding-top: 2em;
  width: 319px;
}

.sub-menu {
  min-height: 0 !important;
}
</style>
