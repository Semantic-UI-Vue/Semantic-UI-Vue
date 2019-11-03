import { shallowMount } from '@vue/test-utils';
import CommentGroup from 'src/views/Comment/CommentGroup';
import Comment from 'src/views/Comment/Comment';

describe('CommentGroup', () => {
  let wrapper;

  it('Renders properly', () => {
    wrapper = shallowMount(CommentGroup);
    expect(wrapper).to.be.ok;
  });

  it('It applies threaded variation', () => {
    wrapper = shallowMount(CommentGroup, {
      propsData: {
        threaded: true,
      },
    });
    expect(wrapper.classes()).to.contain('threaded');
  });

  it('It applies minimal variation', () => {
    wrapper = shallowMount(CommentGroup, {
      propsData: {
        minimal: true,
      },
    });
    expect(wrapper.classes()).to.contain('minimal');
  });

  // this is required because the ui class will override the font-size
  it('It does not apply ui class when its inside a Comment', () => {
    wrapper = shallowMount(CommentGroup, {
      parentComponent: Comment,
    });
    expect(wrapper.vm.$parent.$options.name).to.be.equal('SuiComment');
    expect(wrapper.classes()).to.not.contain('ui');
  });
});
