import * as common from 'test/utils';
import FormField from 'semantic-ui-vue/collections/Form/FormField';

describe('Form', () => {
  describe('FormField', () => {
    common.testClassFromProps(FormField, [
      'inline',
      'required',
      'disabled',
      'error',
    ]);
    common.testClass(FormField, ['field']);
  });
});
