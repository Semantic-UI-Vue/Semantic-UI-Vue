import { shallowMount } from '@vue/test-utils';
import CommentGroup from '../CommentGroup';
import Comment from '../Comment';

describe('CommentGroup', () => {
  let wrapper;

  it('Renders properly', () => {
    wrapper = shallowMount(CommentGroup);
    expect(wrapper.exists()).toBe(true);
  });

  it('It applies threaded variation', () => {
    wrapper = shallowMount(CommentGroup, {
      propsData: {
        threaded: true,
      },
    });
    expect(wrapper.classes()).toContain('threaded');
  });

  it('It applies minimal variation', () => {
    wrapper = shallowMount(CommentGroup, {
      propsData: {
        minimal: true,
      },
    });
    expect(wrapper.classes()).toContain('minimal');
  });

  it('It applies collapsed state', () => {
    wrapper = shallowMount(CommentGroup, {
      propsData: {
        collapsed: true,
      },
    });
    expect(wrapper.classes()).toContain('collapsed');
  });

  // this is required because the ui class will override the font-size
  it('It does not apply ui class when its inside a Comment', () => {
    wrapper = shallowMount(CommentGroup, {
      parentComponent: Comment,
    });
    expect(wrapper.vm.$parent.$options.name).toEqual('SuiComment');
    expect(wrapper.classes()).not.toContain('ui');
  });
});
