import { shallow } from '@vue/test-utils';
import CardContent from 'semantic-ui-vue/views/Card/CardContent';

describe('CardContent', () => {
  it('should create a standalone SUI CardContent', () => {
    const cardContent = shallow(CardContent);
    expect(cardContent.is('div')).to.equal(true);
    expect(cardContent.classes()).to.include('content');
    expect(cardContent.text()).to.equal('');
  });

  it('should create a SUI CardContent with default slot', () => {
    const cardContent = shallow(CardContent, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardContent.is('div')).to.equal(true);
    expect(cardContent.classes()).to.include('content');
    expect(cardContent.text()).to.equal('Default slot');
  });

  it('should create a SUI CardContent with right slot', () => {
    const cardContent = shallow(CardContent, {
      slots: {
        right: '<span>Right slot</span>',
      },
    });
    expect(cardContent.is('div')).to.equal(true);
    expect(cardContent.classes()).to.include('content');
    const right = cardContent.find('div.right');
    expect(right.text()).to.equal('Right slot');
  });

  it('should create a SUI CardContent with extra class according to extra prop', () => {
    const cardContent = shallow(CardContent, {
      propsData: {
        extra: true,
      },
    });
    expect(cardContent.is('div')).to.equal(true);
    expect(cardContent.classes()).to.include('content');
    expect(cardContent.classes()).to.include('extra');
    expect(cardContent.text()).to.equal('');
  });
});
