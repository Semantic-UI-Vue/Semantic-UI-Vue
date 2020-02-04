import { SemanticUIVueMixin } from '../../lib';

export default {
  name: 'SuiRating',
  mixins: [SemanticUIVueMixin],
  binding: {
    prop: 'rating',
    event: 'changed',
  },
  props: {
    icon: String,
    maxRating: Number,
    rating: Number,
  },
  events: {
    rate: {
      custom: true,
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    getCurrentValue(evt) {
      return Number(evt.target.getAttribute('aria-posinset'));
    },
    onRate(evt) {
      const rating = this.getCurrentValue(evt);
      this.$emit('rate', evt, { ...this.$props, rating });
    },
    onMouseleave() {
      this.selected = 0;
    },
    onMouseover(evt) {
      this.selected = this.getCurrentValue(evt);
    },
  },
  render() {
    const ElementType = this.getElementType();
    return (
      <ElementType
        {...this.getChildPropsAndListeners()}
        class={this.classes('ui', this.icon, 'rating')}
        role="radiogroup"
      >
        {[...new Array(this.maxRating)].map((v, i) => {
          const elementValue = i + 1;
          const active = this.rating > i;
          const selected = this.selected > i;
          return (
            <i
              aria-checked={active.toString()}
              aria-posinset={elementValue}
              aria-setsize={this.maxRating}
              class={this.classes(
                active && 'active',
                selected && 'selected',
                'icon',
              )}
              tabindex="0"
              role="radio"
              onClick={this.onRate}
              onMouseover={this.onMouseover}
              onMouseleave={this.onMouseleave}
            />
          );
        })}
      </ElementType>
    );
  },
};
