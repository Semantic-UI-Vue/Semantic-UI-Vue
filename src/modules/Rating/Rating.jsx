import { classes, getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiRating',
  props: {
    defaultRating: Number,
    icon: String,
    maxRating: Number,
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
        {[...new Array(this.maxRating)].map((v, i) => (
          <i
            aria-checked="false"
            aria-posinset={i + 1}
            aria-setsize={this.maxRating}
            class="icon"
            tabindex="0"
            role="radio"
          />
        ))}
      </ElementType>
    );
  },
};
