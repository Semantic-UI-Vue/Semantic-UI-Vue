<template>
  <div class="editor" />
</template>

<script>
import ace from 'brace';
import debounce from 'lodash/debounce';
import 'brace/mode/html';
import 'brace/theme/tomorrow';

export default {
  name: 'Editor',
  props: {
    value: String,
    readonly: Boolean,
  },
  mounted() {
    const emitValue = debounce((value) => {
      this.$emit('input', value);
    }, 1000);

    const editor = ace.edit(this.$el);
    editor.$blockScrolling = Infinity;
    editor.getSession().setMode('ace/mode/html');
    editor.getSession().on('change', () => {
      emitValue(editor.getValue());
    });
    editor.session.setTabSize(2);
    editor.renderer.setShowGutter(false);
    editor.selection.selectFileStart();
    editor.selection.moveTo(Infinity, Infinity);
    editor.setTheme('ace/theme/tomorrow');
    editor.setShowPrintMargin(false);
    editor.setValue(this.value);
    editor.setOptions({
      maxLines: Infinity
    });
    editor.setReadOnly(this.readonly);
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
