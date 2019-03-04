import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiSearchResult',
  mixins: [SemanticUIVueMixin],
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  render() {
    return (
      <a class="result">
        <div class="content">
          <div class="title">{this.item.name}</div>
        </div>
      </a>
    );
  },
};
