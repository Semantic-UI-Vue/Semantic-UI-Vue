import { shallow } from 'vue-test-utils';
import CardMeta from 'src/views/Card/CardMeta';

describe('CardMeta', () => {
  it('should create a standalone SUI CardMeta', () => {
    const cardMeta = shallow(CardMeta);
    expect(cardMeta.is('div')).to.equal(true);
    expect(cardMeta.hasClass('meta')).to.equal(true);
    expect(cardMeta.text()).to.equal('');
  });

  it('should create a SUI CardHeader with default slot', () => {
    const cardMeta = shallow(CardMeta, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardMeta.is('div')).to.equal(true);
    expect(cardMeta.hasClass('meta')).to.equal(true);
    expect(cardMeta.text()).to.equal('Default slot');
  });
});
