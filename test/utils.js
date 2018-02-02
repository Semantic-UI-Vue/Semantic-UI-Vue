import { shallow } from 'vue-test-utils';

export function testClassFromProps(Component, props) {
  props.forEach(prop => it(`should have class ${prop}`, () => {
    const wrapper = shallow(Component, { propsData: { [prop]: true } });
    expect(wrapper.classes()).to.include(prop);
  }));
}
