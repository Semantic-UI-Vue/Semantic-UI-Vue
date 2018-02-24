import { classes, getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiDropdownDivider',
  mixins: [listenersMixin],
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} {...this.generateListeners()} role="option" class={classes('divider')} />
    );
  },
  meta: {
    parent: 'SuiDropdown',
  },
};
