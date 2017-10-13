![Semantic UI Vue](/static/images/logo.png)

[![Build Status](https://travis-ci.org/Semantic-UI-Vue/Semantic-UI-Vue.svg?branch=master)](https://travis-ci.org/Semantic-UI-Vue/Semantic-UI-Vue)
[![codecov](https://codecov.io/gh/Semantic-UI-Vue/Semantic-UI-Vue/branch/master/graph/badge.svg)](https://codecov.io/gh/Semantic-UI-Vue/Semantic-UI-Vue)
[![Join the chat at https://gitter.im/Semantic-UI-Vue/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Semantic-UI-Vue/Lobby)

# Semantic UI Vue

## Introduction

Semantic UI Vue is the Vue integration for [Semantic UI](https://semantic-ui.com/).

It is highly inspired on [Semantic UI React](https://react.semantic-ui.com)
If you have used it already, you will find Semantic UI Vue's API to be almost the same.

Semantic UI Vue is still under heavy development. Please, feel free to contribute.

Here is a JSFiddle for a quick look: https://jsfiddle.net/pvjvekce/

## Contact us!

Do you have a question? Do you want to submit a bug, or suggest an improvement?

Please contact us! Especially at this stage, we really need this.

To do so, do not hesitate to [join our chat on Gitter](https://gitter.im/Semantic-UI-Vue/Lobby), or [submit an issue](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/issues/new) (it doesn't have to be a bug). Read the [CONTRIBUTING.md](https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/blob/master/CONTRIBUTING.md) for more details

## Installing

### JavaScript

The Semantic UI Vue package can be installed via NPM:

```bash
$ npm install semantic-ui-vue --save
```

Installing Semantic UI Vue provides the JavaScript for your components. You'll also need to include a stylesheet to provide the styling for your components.

Once Semantic UI Vue has been installed, you will need to import it in your main file (usually *index.js* or *main.js*) and tell Vue to use it:

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
      message: 'Hello Vue!'
    },
    template: '<span><sui-button primary>click me</sui-button>{{message}}</span>'
  });
  </script>
</body>
</html>
```

Or, in alternative, you can import it using a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min.js"></script>
<script src="https://unpkg.com/semantic-ui-vue/dist/umd/semantic-ui-vue.min.js"></script>
```

Now you are ready to go! Check out the components' examples to see how to use them.

### CSS

#### Content Delivery Network (CDN)

You can use the default Semantic UI stylesheet by including a Semantic UI CDN link in yourindex.html file.
This is the quickest way to get started with Semantic UI Vue. You won't be able to use custom themes with this method.

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
```

#### Semantic UI CSS package

The Semantic UI CSS package is automatically synced with the main Semantic UI repository to provide a lightweight CSS only version of Semantic UI.
Semantic UI CSS can be installed as a package in your project using NPM. You won't be able to use custom themes with this method.

```js
$ npm install semantic-ui-css --save
```

After install, you'll need to include the minified CSS file in your index.js file:

```js
import 'semantic-ui-css/semantic.min.css';
```

#### Semantic UI package

Install the full Semantic UI package.
Semantic UI includes Gulp build tools so your project can preserve its own theme changes, allowing you to customize the style variables.

Detailed documentation on theming in Semantic UI is provided here.

```js
$ npm install semantic-ui --save-dev
```

After building the project with Gulp, you'll need to include the minified CSS file in your index.js file:

```js
import '../semantic/dist/semantic.min.css';
```
