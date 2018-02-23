import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiCardContent',
  mixins: [listenersMixin],
  props: {
    extra: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(this.extra && 'extra', 'content')}
      >
        {this.$slots.default}
        {this.$slots.right && (
          <div class="right floated">
            {this.$slots.right}
          </div>
        )}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiCard',
  },
};
