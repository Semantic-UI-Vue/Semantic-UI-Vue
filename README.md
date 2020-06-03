<p align="center">
  <img
    src="https://raw.githubusercontent.com/Semantic-UI-Vue/Semantic-UI-Vue/master/docs/public/static/images/logo.png"
    alt="Semantic UI Vue"
  />
  <h1 align=center>Semantic UI Vue</h1>
</p>

<p align="center">
  <a href="https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/actions"><img src="https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/workflows/Build%20and%20Deploy/badge.svg" alt="Pipeline status"/></a>
  <a href="https://www.npmjs.com/package/semantic-ui-vue"><img src="https://badge.fury.io/js/semantic-ui-vue.svg" alt="NPM version"/></a>
  <a href="https://codecov.io/gh/Semantic-UI-Vue/Semantic-UI-Vue"><img src="https://codecov.io/gh/Semantic-UI-Vue/Semantic-UI-Vue/branch/master/graph/badge.svg" alt="codecov"/></a><br />
  <a href="https://gitter.im/Semantic-UI-Vue/Lobby"><img src="https://badges.gitter.im/Join%20Chat.svg" alt="Join the chat at https://gitter.im/Semantic-UI-Vue/Lobby"/></a>
</p>

<h4 align="center">
  <br />
  <a href="https://semantic-ui-vue.github.io">Website</a>
  ·
  <a href="#-installation">Installation</a>
  ·
  <a href="#">Configuration (TBD)</a>
</h4>

<h1 align="center">Looking for maintainers!</h1>

There is a lot to do and few maintainers with little time :). If you'd like to help with this project, please let us know.

Semantic UI Vue is the Vue integration for <a src="https://semantic-ui.com/">Semantic UI</a>. It is highly inspired on <a src="https://react.semantic-ui.com">Semantic UI React</a>
If you have used it already, you will find Semantic UI Vue's API to be almost the same. Semantic UI Vue is still **under heavy development**. Please, feel free to contribute. You can see the feature completion state [here](https://semantic-ui-vue.github.io/#/features)

<p align="center">
  <a href="https://codesandbox.io/s/618o6oy16k"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Simple semantic-ui-vue example"/></a>
<p>

## 🚀 Installation

### JavaScript

The Semantic UI Vue package can be installed via NPM/Yarn:

```bash
$ npm install semantic-ui-vue
# or
$ yarn add semantic-ui-vue
```

Installing Semantic UI Vue provides the JavaScript for your components. You'll also need to include a stylesheet to provide the styling for your components.

Once Semantic UI Vue has been installed, you will need to import it in your main file (usually `index.js` or `main.js`) and tell Vue to use it:

```js
import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';

/* ... */

Vue.use(SuiVue);
```

If you are not using Webpack, you can add the script in your html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- head -->
  </head>
  <body>
    <div id="app"></div>
    <script src="node_modules/vue/dist/vue.min.js"></script>
    <script src="node_modules/semantic-ui-vue/dist/umd/semantic-ui-vue.min.js"></script>
    <script>
      Vue.use(SemanticUIVue);
      var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
        },
        template:
          '<span><sui-button primary>click me</sui-button>{{message}}</span>',
      });
    </script>
  </body>
</html>
```

Or, in alternative, you can import it using a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.min.js"></script>
<script src="https://unpkg.com/semantic-ui-vue/dist/commonjs/semantic-ui-vue.js"></script>
```

Now you are ready to go! Check out the components' examples to see how to use them.

### CSS

#### Content Delivery Network (CDN)

You can use the default Semantic UI stylesheet by including a Semantic UI CDN link in your `index.html` file.
This is the quickest way to get started with Semantic UI Vue. You **won't be able to use custom themes** with this method.

> **To avoid unexpected behavior please use only the latest version of Semantic-UI**

```html
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>
```

#### Semantic UI CSS package

The Semantic UI CSS package is automatically synced with the main Semantic UI repository to provide a lightweight CSS only version of Semantic UI.
Semantic UI CSS can be installed as a package in your project using NPM. You **won't be able to use custom themes** with this method.

```bash
$ npm install semantic-ui-css --save
# or
$ yarn add semantic-ui-css
```

After install, you'll need to include the minified CSS file in your index.js file:

```js
import 'semantic-ui-css/semantic.min.css';
```

#### Semantic UI package

Install the full Semantic UI package.
Semantic UI includes Gulp build tools so your project can preserve its own theme changes, allowing you to customize the style variables.

Detailed documentation on theming in Semantic UI is provided [here](https://semantic-ui.com/usage/theming.html).

```bash
$ npm install semantic-ui --save-dev
# or
$ yarn add semantic-ui
```

After building the project with Gulp, you'll need to include the minified CSS file in your index.js file:

```js
import '../semantic/dist/semantic.min.css';
```

### Nuxt.js module

You can use semantic-ui-vue as [nuxt.js](https://github.com/nuxt/nuxt.js) module.

Usage:

- Install semantic-ui-vue and semantic-ui-css packages
- Install semantic-ui-vue and semantic-ui-css packages
- Add this into your nuxt.config.js file:

```js
{
  modules: [
    'semantic-ui-vue/nuxt', // includes styles from semantic-ui-css
    ['semantic-ui-vue/nuxt', { css: false }], // if you have your own semantic-ui styles
  ];
}
```

## 🤝 Contact us!

Do you have a question? Do you want to submit a bug, or suggest an improvement?

Please contact us! Especially at this stage, we really need this.

To do so, do not hesitate to [join our chat on Gitter](https://gitter.im/Semantic-UI-Vue/Lobby), or [submit an issue](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/issues/new) (it doesn't have to be a bug). Read the [CONTRIBUTING.md](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/blob/master/CONTRIBUTING.md) for more details

<p align="center">
  <img
    src="https://raw.githubusercontent.com/Semantic-UI-Vue/Semantic-UI-Vue/master/docs/public/static/images/logo.png"
    alt="Semantic UI Vue"
  />
</p>

## 📝 License

Copyright © 2019-present, [Mario Lamacchia](https://github.com/mariolamacchia).<br>
This project is [MIT](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/blob/master/LICENSE.md) licensed.
