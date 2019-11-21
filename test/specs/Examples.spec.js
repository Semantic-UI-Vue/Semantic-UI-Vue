import { mount, createLocalVue } from '@vue/test-utils';
import SuiVue from 'semantic-ui-vue';
import * as Examples from '../../docs/examples';

const localVue = createLocalVue();
localVue.use(SuiVue);

describe.skip('Examples', () => {
  Object.keys(Examples).forEach((componentName) => {
    describe(componentName, () => {
      const exampleSections = Examples[componentName];
      exampleSections.forEach((section) => {
        describe(section.title, () => {
          section.examples.forEach((example) => {
            if (example.title) {
              describe(example.title, () => {
                it('should match snapshot', () => {
                  const html = mount(example.component, { localVue }).html();
                  expect(html).toMatchSnapshot();
                });
              });
            }
          });
        });
      });
    });
  });
});
