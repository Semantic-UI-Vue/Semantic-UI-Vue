<template>
  <sui-list>
    <a is="sui-list-item">
      <sui-icon name="help" />
      <sui-list-content>
        <sui-list-header>Floated Icon</sui-list-header>
        <sui-list-description>
          This text will always have a left margin to make sure it sits
          alongside your icon
        </sui-list-description>
      </sui-list-content>
    </a>
    <a is="sui-list-item">
      <sui-icon name="right triangle" />
      <sui-list-content>
        <sui-list-header>Icon Alignment</sui-list-header>
        <sui-list-description>
          Floated icons are by default top aligned. To have an icon top aligned
          try this example.
        </sui-list-description>
      </sui-list-content>
    </a>
    <sui-list-item>
      <sui-icon name="help" />
      Inline Text
    </sui-list-item>
  </sui-list>
</template>

<script>
export default {};
</script>
