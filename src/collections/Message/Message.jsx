import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiMessage',
  props: {
    info: {
      type: Boolean,
      description: 'A message may be formatted to display information.',
    },
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.info && 'info',
          'message',
        )}
      >
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
};
