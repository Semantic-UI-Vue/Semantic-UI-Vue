import { shallow } from '@vue/test-utils';
import Card from 'semantic-ui-vue/views/Card/Card';

describe('Card', () => {
  it('should create a SUI Card', () => {
    const card = shallow(Card);
    expect(card.is('div')).toEqual(true);
    expect(card.classes()).toContain('ui');
    expect(card.classes()).toContain('card');
    expect(card.text()).toEqual('');
  });
});
