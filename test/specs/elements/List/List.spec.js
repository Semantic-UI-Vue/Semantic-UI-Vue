import { shallow } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';
import List from 'src/elements/List/List';

describe('List', () => {
  testClassFromProps(List, ['ui', 'list']);

  it('should create a SUI List', () => {
    const list = shallow(List);

    expect(list.is('div')).to.equal(true);
    expect(list.classes()).to.include('ui');
    expect(list.classes()).to.include('list');
  });

  it('should create a SUI List with inverted style', () => {
    const list = shallow(List, { propsData: { inverted: true } });
    expect(list.classes()).to.include('inverted');
  });
});
