import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiModalActions',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('actions')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'Modal',
  },
};
