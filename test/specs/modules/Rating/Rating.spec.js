import { mount, shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import Rating from 'src/modules/Rating/Rating';

describe('Rating', () => {
  testClassFromProps(Rating, ['ui', 'rating']);

  it('should create rating stars', () => {
    const rating = shallow(Rating, { propsData: { rating: 3, maxRating: 5 } });
    expect(rating.findAll('i').length).to.equal(5);
    expect(rating.findAll('i[aria-checked=true]').length).to.equal(3);
    expect(rating.findAll('i[aria-checked=false]').length).to.equal(2);
  });

  it('should pass props new rating value in onRate arguments', () => {
    const rating = mount(Rating, { propsData: { rating: 1, maxRating: 5 } });
    rating.findAll('i').at(4).trigger('click');
    const emittedEvent = rating.emitted().rate[0];
    expect(emittedEvent[1].rating).to.be.equal(5);
    expect(emittedEvent[1].maxRating).to.be.equal(5);
  });
});
