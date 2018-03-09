import { shallow } from 'vue-test-utils';

export function testClass(Component, props) {
  props.forEach(prop => it(`should have class ${prop}`, () => {
    const wrapper = shallow(Component);
    expect(wrapper.classes()).to.include(prop);
  }));
}

export function testClassFromProps(Component, props) {
  props.forEach(prop => it(`should have class ${prop}`, () => {
    const wrapper = shallow(Component, { propsData: { [prop]: true } });
    expect(wrapper.classes()).to.include(prop);
  }));
}

export function testTag(Component, defaultTag, props = {}) {
  it(`should be a \`${defaultTag}\``, () => {
    const wrapper = shallow(Component);
    expect(wrapper.is(defaultTag)).to.equal(true);
  });

  Object.keys(props).forEach((prop) => {
    const tag = props[prop];
    it(`should be a \`${tag}\``, () => {
      const wrapper = shallow(Component, { propsData: { [prop]: true } });
      expect(wrapper.is(tag)).to.equal(true);
    });
  });
}

export function withRequired(Component, props) {
  const getPropType = propName => Component.props[propName].type || Component.props[propName];

  const requiredProps = Object.keys(props).reduce((propsObject, propName) => ({
    ...propsObject,
    [propName]: {
      type: getPropType(propName),
      default() {
        return props[propName];
      },
    },
  }), {});

  return {
    ...Component,
    name: `${Component.name}WithRequired`,
    props: {
      ...Component.props,
      ...requiredProps,
    },
  };
}
