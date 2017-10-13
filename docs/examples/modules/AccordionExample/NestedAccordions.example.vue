<template lang="html">
  <div>
    <sui-accordion exclusive styled>
      <sui-accordion-title>Level 1</sui-accordion-title>
      <sui-accordion-content active>
        Welcome to level 1
        <sui-accordion exclusive styled>
          <sui-accordion-title>Level 1A</sui-accordion-title>
          <sui-accordion-content active>
            Level 1A Contents
            <sui-accordion exclusive styled>
              <sui-accordion-title>Level 1A-A</sui-accordion-title>
              <sui-accordion-content>Level 1A-A Contents</sui-accordion-content>
              <sui-accordion-title>Level 1A-B</sui-accordion-title>
              <sui-accordion-content>Level 1A-B Contents</sui-accordion-content>
            </sui-accordion>
          </sui-accordion-content>
          <sui-accordion-title>Level 1B</sui-accordion-title>
          <sui-accordion-content>Level 1B Contents</sui-accordion-content>
          <sui-accordion-title>Level 1C</sui-accordion-title>
          <sui-accordion-content>Level 1C Contents</sui-accordion-content>
        </sui-accordion>
      </sui-accordion-content>
      <sui-accordion-title>Level 2</sui-accordion-title>
      <sui-accordion-content>
        Welcome to level 2
        <sui-accordion exclusive styled>
          <sui-accordion-title>Level 2A</sui-accordion-title>
          <sui-accordion-content active>
            Level 2A Contents
            <sui-accordion exclusive styled>
              <sui-accordion-title>Level 2A-A</sui-accordion-title>
              <sui-accordion-content>Level 2A-A Contents</sui-accordion-content>
              <sui-accordion-title>Level 2A-B</sui-accordion-title>
              <sui-accordion-content>Level 2A-B Contents</sui-accordion-content>
            </sui-accordion>
          </sui-accordion-content>
          <sui-accordion-title>Level 2B</sui-accordion-title>
          <sui-accordion-content>Level 2B Contents</sui-accordion-content>
          <sui-accordion-title>Level 2C</sui-accordion-title>
          <sui-accordion-content>Level 2C Contents</sui-accordion-content>
        </sui-accordion>
      </sui-accordion-content>
    </sui-accordion>
  </div>
</template>

<script>
export default {
  name: 'NestedAccordionsExample',
};
</script>
