import { shallow } from '@vue/test-utils';
import CardGroup from 'src/views/Card/CardGroup';

describe('CardGroup', () => {
  it('should create a standalone SUI CardGroup', () => {
    const cardGroup = shallow(CardGroup);
    expect(cardGroup.is('div')).to.equal(true);
    expect(cardGroup.classes()).to.include('ui');
    expect(cardGroup.classes()).to.include('cards');
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
    expect(cardGroup.classes()).to.include('ui');
    expect(cardGroup.classes()).to.include('three');
    expect(cardGroup.classes()).to.include('stackable');
    expect(cardGroup.classes()).to.include('cards');
    expect(cardGroup.text()).to.equal('');
  });
});
