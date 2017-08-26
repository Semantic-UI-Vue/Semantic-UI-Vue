import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiFlag',
  props: {
    name: String,
  },
  render() {
    const ElementType = getElementType(this, 'i');
    return <ElementType {...getChildProps(this)} class={classes('flag', this.name)} />;
  },
};
