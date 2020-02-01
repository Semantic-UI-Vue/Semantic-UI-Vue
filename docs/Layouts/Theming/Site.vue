<template lang="html">
  <div is="sui-grid" stackable :columns="3">
    <div is="sui-grid-column">
      <h1 is="sui-header">Heading 1</h1>
      <h2 is="sui-header">Heading 2</h2>
      <h3 is="sui-header">Heading 3</h3>
      <h4 is="sui-header">Heading 4</h4>
      <h5 is="sui-header">Heading 5</h5>
      <p>
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Nullam id dolor id nibh ultricies vehicula.
      </p>
    </div>
    <div is="sui-grid-column">
      <h2>Example body text</h2>
      <p>
        Nullam quis risus eget
        <a href="javascript:void 0">urna mollis ornare</a>
        vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
        vehicula.
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        The following snippet of text is <strong>rendered as bold text</strong>.
      </p>
      <p>
        The following snippet of text is <em>rendered as italicized text</em>.
      </p>
      <p>
        An abbreviation of the word attribute is
        <abbr title="attribute">attr</abbr>.
      </p>
    </div>
    <div is="sui-grid-column">
      <div
        class="docs-color-grid"
        is="sui-grid"
        centered
        :columns="3"
        stackable
        padded
        vertical-align="middle"
      >
        <div is="sui-grid-column" color="red">Red</div>
        <div is="sui-grid-column" color="orange">Orange</div>
        <div is="sui-grid-column" color="yellow">Yellow</div>
        <div is="sui-grid-column" color="olive">Olive</div>
        <div is="sui-grid-column" color="green">Green</div>
        <div is="sui-grid-column" color="teal">Teal</div>
        <div is="sui-grid-column" color="blue">Blue</div>
        <div is="sui-grid-column" color="violet">Violet</div>
        <div is="sui-grid-column" color="purple">Purple</div>
        <div is="sui-grid-column" color="pink">Pink</div>
        <div is="sui-grid-column" color="brown">Brown</div>
        <div is="sui-grid-column" color="grey">Grey</div>
        <div is="sui-grid-column" color="black">Black</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.docs-color-grid {
  margin: -1.5em;
  width: 400px;
}

.docs-color-grid .column {
  margin: 0.5em;
  width: 50px;
  height: 50px;
}
</style>
