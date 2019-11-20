import { shallow } from '@vue/test-utils';
import CardDescription from 'semantic-ui-vue/views/Card/CardDescription';

describe('CardDescription', () => {
  it('should create a standalone SUI CardDescription', () => {
    const cardDescription = shallow(CardDescription);
    expect(cardDescription.is('div')).toEqual(true);
    expect(cardDescription.classes()).toContain('description');
    expect(cardDescription.text()).toEqual('');
  });

  it('should create a SUI CardDescription with default slot', () => {
    const cardContent = shallow(CardDescription, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardContent.is('div')).toEqual(true);
    expect(cardContent.classes()).toContain('description');
    expect(cardContent.text()).toEqual('Default slot');
  });
});
