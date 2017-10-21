import { shallow } from 'vue-test-utils';
import CardDescription from 'src/views/Card/CardDescription';

describe('CardDescription', () => {
  it('should create a standalone SUI CardDescription', () => {
    const cardDescription = shallow(CardDescription);
    expect(cardDescription.is('div')).to.equal(true);
    expect(cardDescription.hasClass('description')).to.equal(true);
    expect(cardDescription.text()).to.equal('');
  });

  it('should create a SUI CardDescription with default slot', () => {
    const cardContent = shallow(CardDescription, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardContent.is('div')).to.equal(true);
    expect(cardContent.hasClass('description')).to.equal(true);
    expect(cardContent.text()).to.equal('Default slot');
  });
});
