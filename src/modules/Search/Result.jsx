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
  methods: {
    handleClick() {
      this.$emit('selected', this.item);
    },
  },
  render() {
    return (
      <a onClick={this.handleClick} class="result">
        <div class="content">
          <div class="title">{this.item.title}</div>
          {this.item.description && (
            <div class="description">{this.item.description}</div>
          )}
        </div>
      </a>
    );
  },
};
