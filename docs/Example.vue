<template>
  <div :class="$style.example">
    <sui-menu floated="right" text>
      <sui-popup content="View code" position="bottom center">
        <sui-menu-item slot="trigger" icon="code" :class="$style.action" @click="$emit('open')" />
      </sui-popup>
      <sui-popup content="Open on CodeSandbox" position="bottom center">
        <sui-menu-item slot="trigger" icon="connectdevelop" :class="$style.action" />
      </sui-popup>
      <sui-popup content="Maximize" position="bottom center">
        <sui-menu-item slot="trigger" icon="window maximize" :class="$style.action" />
      </sui-popup>
    </sui-menu>
    <h4 :v-if="example.title" is="sui-header" :class="$style.h4">
      {{example.title}}
    </h4>
    <p :v-if="example.description" :class="$style.p">
      {{example.description}}
    </p>
    <div :is="example.component" />
  </div>
</template>

<script>
export default {
  props: {
    example: Object,
    open: Boolean,
  },
};
</script>

<style module>
.h4 {
  font-size: 18px !important;
  margin: 0em 0em 0em !important;
}

.p {
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: rgba(0, 0, 0, 0.8) !important;
  margin-top: 0 !important;
  padding-bottom: 1em !important;
}

.action {
  opacity: .5 !important;
  transition: opacity 0.3s ease-out;
}

.action:hover {
  opacity: 1 !important;
}
</style>
