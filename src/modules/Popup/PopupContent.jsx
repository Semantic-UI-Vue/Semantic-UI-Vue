import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiPopupContent',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType {...this.getChildPropsAndListeners()} class="content">
        {this.$slots.default}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiPopup',
  },
};
