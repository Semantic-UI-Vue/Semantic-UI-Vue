import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiTab',
  mixins: [SemanticUIVueMixin],
  render() {
    const ElementType = this.getElementType();

    return (
      <ElementType>
        <h1>Tab</h1>
      </ElementType>
    );
  },
};
