import { shallow } from 'vue-test-utils';
import CardGroup from 'src/views/Card/CardGroup';

describe('CardGroup', () => {
  it('should create a standalone SUI CardGroup', () => {
    const cardGroup = shallow(CardGroup);
    expect(cardGroup.is('div')).to.equal(true);
    expect(cardGroup.hasClass('ui')).to.equal(true);
    expect(cardGroup.hasClass('cards')).to.equal(true);
    expect(cardGroup.text()).to.equal('');
  });

  it('should create create a SUI CardGroup with correct classes according to props', () => {
    const cardGroup = shallow(CardGroup, {
      propsData: {
        itemsPerRow: 3,
        stackable: true,
      },
    });
    expect(cardGroup.is('div')).to.equal(true);
    expect(cardGroup.hasClass('ui')).to.equal(true);
    expect(cardGroup.hasClass('three')).to.equal(true);
    expect(cardGroup.hasClass('stackable')).to.equal(true);
    expect(cardGroup.hasClass('cards')).to.equal(true);
    expect(cardGroup.text()).to.equal('');
  });
});
