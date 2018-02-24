<template>
  <div class="editor"></div>
</template>

<script>
import ace from 'brace';
import kebabCase from 'lodash/kebabCase';
import * as components from 'src';
import 'brace/ext/language_tools';
import 'brace/mode/html';
import 'brace/theme/tomorrow';

const languageTools = ace.acequire('ace/ext/language_tools');

const semanticUIVueCompleter = {
  getCompletions(editor, session, pos, prefix, callback) {
    const completions = [];

    Object.values(components).forEach(({ name, props }) => {
      completions.push({
        caption: name,
        value: kebabCase(name),
        meta: 'Component',
      });

      if (props) {
        Object.keys(props).forEach((propName) => {
          if (completions.find(({ value }) => value === propName)) return;
          completions.push({
            caption: propName,
            value: kebabCase(propName),
            meta: 'Component Prop',
          });
        });
      }
    });
    callback(null, completions);
  },
};

languageTools.addCompleter(semanticUIVueCompleter);

export default {
  name: 'Editor',
  template: '<div></div>',
  props: {
    value: String,
    readonly: Boolean,
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
    editor.setReadOnly(this.readonly);
    editor.renderer.setShowGutter(false);
    editor.session.setTabSize(2);
    editor.selection.moveTo(Infinity, Infinity);
  },
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
