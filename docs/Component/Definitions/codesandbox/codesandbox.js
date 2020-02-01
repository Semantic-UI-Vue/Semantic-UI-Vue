import { getParameters } from 'codesandbox/lib/api/define';
import indexJs from '!raw-loader!./files';
import indexHtml from '!raw-loader!./files/index.html';
import packageJson from './files/package';

export function openSandbox(exampleCode) {
  const parameters = getParameters({
    files: {
      'index.js': { content: indexJs },
      'package.json': { content: packageJson },
      'Example.vue': { content: exampleCode },
      'static/index.html': { content: indexHtml },
    },
  });

  const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=${encodeURIComponent(
    'module=/Example.vue',
  )}`;
  open(url);
}
