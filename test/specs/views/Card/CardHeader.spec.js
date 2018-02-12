import { shallow } from 'vue-test-utils';
import CardHeader from 'src/views/Card/CardHeader';

describe('CardHeader', () => {
  it('should create a standalone SUI CardHeader', () => {
    const cardHeader = shallow(CardHeader);
    expect(cardHeader.is('div')).to.equal(true);
    expect(cardHeader.classes()).to.include('header');
    expect(cardHeader.text()).to.equal('');
  });

  it('should create a SUI CardHeader with default slot', () => {
    const cardHeader = shallow(CardHeader, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardHeader.is('div')).to.equal(true);
    expect(cardHeader.classes()).to.include('header');
    expect(cardHeader.text()).to.equal('Default slot');
  });
});
