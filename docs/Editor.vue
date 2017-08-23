<template>
  <div class="editor" />
</template>

<script>
import ace from 'brace';
import 'brace/mode/html';
import 'brace/theme/tomorrow';

export default {
  name: 'Editor',
  props: {
    value: String,
  },
  mounted() {
    const editor = ace.edit(this.$el);
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/html');
    editor.setTheme('ace/theme/tomorrow');
    editor.renderer.setShowGutter(false);
    editor.session.setTabSize(2);
    editor.setShowPrintMargin(false);
    editor.setValue(this.value);
    editor.selection.selectFileStart();
    editor.selection.moveTo(Infinity, Infinity);
    editor.setOptions({
      maxLines: Infinity
    });
    window.editors = window.editors ? window.editors.concat([editor]) : [editor];
  },
  template: '<div></div>',
};
</script>

<style scoped>
.editor {
  background: transparent!important;
}
</style>

<style>
.ace_active-line {
  background-color: transparent!important;
}
</style>
