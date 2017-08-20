import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  render() {
    const ElementType = getElementType(this, 'i');
    return (
      <ElementType {...getChildProps(this)} class={`icon ${this.name}`} />
    );
  },
};
