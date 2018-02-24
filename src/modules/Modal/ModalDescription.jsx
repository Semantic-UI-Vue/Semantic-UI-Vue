import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiModalDescription',
  mixins: [listenersMixin],
  props: {
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        {...this.generateListeners()}
        class={classes('description')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'Modal',
  },
};
