import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiSearchResult',
  mixins: [SemanticUIVueMixin],
  props: {
    title: {
      type: String,
      description: 'Display title.',
    },
    description: {
      type: String,
      description: 'Additional text with less emphasis.',
    },
    url: {
      type: String,
      description: 'Link to open on click.',
    },
  },
  render() {
    const ElementType = this.getElementType(this.url ? 'a' : 'div');
    const urlProps = this.url ? { url: this.url } : {};

    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        {...urlProps}
        class="result"
      >
        <div class="content">
          {this.title && <div class="title">{this.title}</div>}
          {this.description && (
            <div class="description">{this.description}</div>
          )}
        </div>
      </ElementType>
    );
  },
};
