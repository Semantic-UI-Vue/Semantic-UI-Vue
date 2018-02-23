import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiDimmer',
  mixins: [listenersMixin],
  props: {
    active: Boolean,
    inverted: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.active && 'active',
          this.inverted && 'inverted',
          'dimmer',
        )}
      >
        <div class="content">
          <div class="center">
            {this.$slots.default}
          </div>
        </div>
      </ElementType>
    );
  },
};
