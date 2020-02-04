import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiSearchEmptyMessage',
  mixins: [SemanticUIVueMixin],
  render() {
    return (
      <div class={this.classes('message', 'empty')}>
        <div class={this.classes('header')}>No Results</div>
        <div class={this.classes('description')}>
          Your search returned no results
        </div>
      </div>
    );
  },
};
