import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiRating',
  binding: {
    prop: 'rating',
    event: 'changed',
  },
  props: {
    icon: String,
    maxRating: Number,
    rating: Number,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes(
          'ui',
          this.icon,
          'rating',
        )}
        role="radiogroup"
      >
        {[...new Array(this.maxRating)].map((v, i) => {
          const active = this.rating > i;
          return (
            <i
              aria-checked={active.toString()}
              aria-posinset={i + 1}
              aria-setsize={this.maxRating}
              class={classes(active && 'active', 'icon')}
              tabindex="0"
              role="radio"
            />
          );
        })}
      </ElementType>
    );
  },
};
