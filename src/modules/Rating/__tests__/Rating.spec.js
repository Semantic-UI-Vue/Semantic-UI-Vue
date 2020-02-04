import { mount, shallowMount } from '@vue/test-utils';
import Rating from 'semantic-ui-vue/modules/Rating/Rating';

describe('Rating', () => {
  it('should create rating stars', () => {
    const rating = shallowMount(Rating, {
      propsData: { rating: 3, maxRating: 5 },
    });
    expect(rating.findAll('i').length).toEqual(5);
    expect(rating.findAll('i[aria-checked=true]').length).toEqual(3);
    expect(rating.findAll('i[aria-checked=false]').length).toEqual(2);
  });

  it('should pass props new rating value in onRate arguments', () => {
    const rating = mount(Rating, { propsData: { rating: 1, maxRating: 5 } });
    rating
      .findAll('i')
      .at(4)
      .trigger('click');
    const emittedEvent = rating.emitted().rate[0];
    expect(emittedEvent[1].rating).toEqual(5);
    expect(emittedEvent[1].maxRating).toEqual(5);
  });
});
