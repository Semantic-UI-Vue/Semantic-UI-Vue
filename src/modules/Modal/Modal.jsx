import { directive as onClickaway } from 'vue-clickaway';
import { classes, getChildProps, getElementType } from '../../lib';
import { Enum } from '../../lib/PropTypes';

export default {
  name: 'SuiModal',
  model: {
    prop: 'open',
    event: 'toggle',
  },
  directives: { onClickaway },
  props: {
    basic: Boolean,
    closeIcon: Boolean,
    dimmerVariation: Enum(['inverted'], { type: Boolean }),
    open: Boolean,
    size: Enum(['fullscreen', 'large', 'mini', 'small', 'tiny']),
  },
  methods: {
    close() {
      this.$emit('toggle', false);
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui dimmer modals page modal-component',
          this.open && 'visible active',
        )}
        onClick={this.close}
        onNativeClick={this.close}
      />
    );
  },
};
