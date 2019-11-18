import { shallow } from '@vue/test-utils';
import Card from 'semantic-ui-vue/views/Card/Card';

describe('Card', () => {
  it('should create a SUI Card', () => {
    const card = shallow(Card);
    expect(card.is('div')).to.equal(true);
    expect(card.classes()).to.include('ui');
    expect(card.classes()).to.include('card');
    expect(card.text()).to.equal('');
  });
});
