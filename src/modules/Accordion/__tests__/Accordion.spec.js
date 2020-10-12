import Accordion from 'semantic-ui-vue/modules/Accordion/Accordion';
import { shallowMount } from '@vue/test-utils';
import { testClassFromProps } from 'test/utils';

describe('Accordion', () => {
  testClassFromProps(Accordion, ['ui', 'accordion']);

  const panels = [
    { title: 'title0', content: 'content0' },
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
  ];

  it('should render title and content elements based on panels', () => {
    const accordion = shallowMount(Accordion, {
      propsData: { panels: panels },
    });
    expect(accordion.findAll('.title').length).toBe(3);
    expect(accordion.findAll('.content').length).toBe(3);
  });

  it('should open only specific panel based on activeIndex prop', () => {
    const accordion = shallowMount(Accordion, {
      propsData: {
        panels: panels,
        activeIndex: 2,
      },
    });
    const titles = accordion.findAll('.title');
    expect(titles.at(0).classes('active')).toBe(false);
    expect(titles.at(1).classes('active')).toBe(false);
    expect(titles.at(2).classes('active')).toBe(true);
  });

  it('should close active panel when click on title', async () => {
    const accordion = shallowMount(Accordion, {
      propsData: {
        panels: panels,
        activeIndex: 1,
      },
    });
    await accordion.find('.title.active').trigger('click');
    expect(accordion.findAll('.active').length).toBe(0);
  });

  it('should open only one panel when exclusive', async () => {
    const accordion = shallowMount(Accordion, {
      propsData: {
        panels: panels,
        activeIndex: 1,
        exclusive: true,
      },
    });
    const titles = accordion.findAll('.title');
    await titles.at(2).trigger('click');
    expect(accordion.findAll('.active.title').length).toBe(1);
    expect(titles.at(2).classes('active')).toBe(true);
  });

  it('should allow multiple active panels when is not exclusive', async () => {
    const accordion = shallowMount(Accordion, {
      propsData: {
        panels: panels,
        activeIndex: 1,
      },
    });
    const titles = accordion.findAll('.title');
    await titles.at(2).trigger('click');
    expect(accordion.findAll('.active.title').length).toBe(2);
    expect(titles.at(1).classes('active')).toBe(true);
    expect(titles.at(2).classes('active')).toBe(true);
  });
});
