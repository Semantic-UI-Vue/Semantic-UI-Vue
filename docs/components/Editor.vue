<template>
  <div class="editor"></div>
</template>

<script>
import ace from 'brace';
import 'brace/ext/language_tools';
import 'brace/mode/html';
import 'brace/theme/tomorrow';

export default {
  name: 'Editor',
  template: '<div></div>',
  props: {
    value: String,
  },
  watch: {
    value(value) {
      if (value !== this.editor.getValue()) {
        this.editor.setValue(value);
        this.editor.selection.moveTo(Infinity, Infinity);
      }
    },
  },
  mounted() {
    const editor = ace.edit(this.$el);
    this.editor = editor;
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/html');
    editor.getSession().on('change', () => {
      this.$emit('input', editor.getValue());
    });
    editor.setTheme('ace/theme/tomorrow');
    editor.setShowPrintMargin(false);
    editor.setValue(this.value);
    editor.setOptions({ maxLines: Infinity });
    editor.setOptions({ enableBasicAutocompletion: true });
    editor.setOptions({ enableLiveAutocompletion: true });
    editor.setReadOnly(true);
    editor.renderer.setShowGutter(false);
    editor.session.setTabSize(2);
    editor.selection.moveTo(Infinity, Infinity);
  },
};
</script>

<style scoped>
.editor {
  background: transparent !important;
}
</style>

<style>
.ace_active-line {
  background-color: transparent !important;
}
</style>
