import { createLocalVue } from '@vue/test-utils';
import SuiVue from 'semantic-ui-vue';
import * as Examples from '../../docs/examples';
import renderer from 'react-test-renderer';

const localVue = createLocalVue();
localVue.use(SuiVue);

describe('Examples', () => {
  Object.keys(Examples).forEach((componentName) => {
    describe(componentName, () => {
      const exampleSections = Examples[componentName];
      exampleSections.forEach((section) => {
        describe(section.title, () => {
          section.examples.forEach((example) => {
            if (example.title) {
              describe(example.title, () => {
                it('should match snapshot', () => {
                  const tree = renderer.create(example).toJSON();
                  expect(tree).toMatchSnapshot();
                });
              });
            }
          });
        });
      });
    });
  });
});
