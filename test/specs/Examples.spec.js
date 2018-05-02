import { mount } from '@vue/test-utils';
import chai from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import * as Examples from '../../docs/examples';
import getComponentFromString from '../../docs/getComponentFromString';

chai.use(matchSnapshot);

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
                  const Component = getComponentFromString(example.component);
                  chai.expect(mount(Component).html()).to.matchSnapshot();
                });
              });
            }
          });
        });
      });
    });
  });
});
