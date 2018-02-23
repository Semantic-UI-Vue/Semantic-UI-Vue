import { getChildProps, getElementType, listenersMixin } from '../../lib';

export default {
  name: 'SuiButtonOr',
  mixins: [listenersMixin],
  props: {
    text: String,
  },
  render() {
    const ElementType = getElementType(this);
    const attrs = {};
    if (this.text) attrs['data-text'] = this.text;
    return (
      <ElementType {...getChildProps(this)} class="or" {...{ attrs }}/>
    );
  },
  meta: {
    parent: 'SuiButton',
  },
};
