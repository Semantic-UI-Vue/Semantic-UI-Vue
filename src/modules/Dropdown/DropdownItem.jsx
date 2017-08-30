import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiDropdownItem',
  props: {
    text: String,
    description: String,
    icon: String,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} role="option" class={classes('item')}>
        {this.icon && <i aria-hidden="true" class={classes(this.icon, 'icon')} />}
        {this.description && <span class="description">{this.description}</span>}
        {this.text && <span class="text">{this.text}</span>}
      </ElementType>
    );
  },
};
