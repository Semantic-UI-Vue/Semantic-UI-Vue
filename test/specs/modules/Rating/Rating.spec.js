import { shallow } from 'vue-test-utils';
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
});
