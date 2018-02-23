import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCard',
  mixins: [listenersMixin],
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          'card',
        )}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};
