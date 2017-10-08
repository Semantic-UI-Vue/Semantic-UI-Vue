import { shallow } from 'vue-test-utils';
import { testClassFromProps } from 'test/utils';
import Label from 'src/elements/Label/Label';

describe('Label', () => {
  testClassFromProps(Label, ['ui', 'label']);

  it('should create a SUI Label', () => {
    const label = shallow(Label);
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('ui')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
  });

  it('should create a SUI Label with image', () => {
    const label = shallow(Label, { propsData: { image: true } });
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('ui')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.hasClass('image')).to.equal(true);
  });
  it('should create a SUI colored Label ', () => {
    const label = shallow(Label, { propsData: { color: 'red' } });
    expect(label.is('div')).to.equal(true);
    expect(label.hasClass('ui')).to.equal(true);
    expect(label.hasClass('label')).to.equal(true);
    expect(label.hasClass('red')).to.equal(true);
  });
});
