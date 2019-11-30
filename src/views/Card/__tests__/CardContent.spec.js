import { shallowMount } from '@vue/test-utils';
import CardContent from 'semantic-ui-vue/views/Card/CardContent';

describe('CardContent', () => {
  it('should create a standalone SUI CardContent', () => {
    const cardContent = shallowMount(CardContent);
    expect(cardContent.is('div')).toEqual(true);
    expect(cardContent.classes()).toContain('content');
    expect(cardContent.text()).toEqual('');
  });

  it('should create a SUI CardContent with default slot', () => {
    const cardContent = shallowMount(CardContent, {
      slots: {
        default: '<span>Default slot</span>',
      },
    });
    expect(cardContent.is('div')).toEqual(true);
    expect(cardContent.classes()).toContain('content');
    expect(cardContent.text()).toEqual('Default slot');
  });

  it('should create a SUI CardContent with right slot', () => {
    const cardContent = shallowMount(CardContent, {
      slots: {
        right: '<span>Right slot</span>',
      },
    });
    expect(cardContent.is('div')).toEqual(true);
    expect(cardContent.classes()).toContain('content');
    const right = cardContent.find('div.right');
    expect(right.text()).toEqual('Right slot');
  });

  it('should create a SUI CardContent with extra class according to extra prop', () => {
    const cardContent = shallowMount(CardContent, {
      propsData: {
        extra: true,
      },
    });
    expect(cardContent.is('div')).toEqual(true);
    expect(cardContent.classes()).toContain('content');
    expect(cardContent.classes()).toContain('extra');
    expect(cardContent.text()).toEqual('');
  });
});
