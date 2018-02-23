import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiFlag',
  mixins: [listenersMixin],
  props: {
    name: String,
  },
  render() {
    const ElementType = getElementType(this, 'i');
    return <ElementType {...getChildProps(this)} class={classes('flag', this.name)} />;
  },
};
