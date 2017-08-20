import { getChildProps, getElementType } from 'src/lib';
import SuiMenuItem from './MenuItem';

export default {
  name: 'SuiMenu',
  components: { SuiMenuItem },
  props: {
    activeIndex: Number,
    inverted: Boolean,
    items: Array,
    vertical: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={`ui menu${this.vertical ? ' vertical' : ''}${this.inverted ? ' inverted' : ''}`}
      >
        {this.$slots.default || this.items.map((item, index) => (
          <SuiMenuItem {...{ props: item }} active={item.active || this.activeIndex === index}/>
        ))}
      </ElementType>
    );
  },
};
