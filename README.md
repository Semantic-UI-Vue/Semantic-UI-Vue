![Semantic UI Vue](/static/images/logo.png)

# Semantic UI Vue

## Introduction

Semantic UI Vue is the Vue integration for [Semantic UI](https://semantic-ui.com/).

It is higly inspired on [Semantic UI React](https://react.semantic-ui.com)
If you have used it already, you will find Semantic UI Vue's API to be almost the same.

Semantic UI Vue is still under heavy development. Please, feel free to contribute.

## Installing

### JavaScript

The Semantic UI Vue package can be installed via NPM:

```$ npm install sui-vue --save```

Installing Semantic UI Vue provides the JavaScript for your components. You'll also need to include a stylesheet to provide the styling for your components.

Once Semantic UI Vue has been installed, you will need to import it in your main file (usually *index.js* or *main.js*) and tell Vue to use it:

```
import Vue form 'vue';
import SuiVue from 'sui';

/* ... */

Vue.use(SuiVue);```

Now you are ready to go! Check out the components' examples to see how to use them.

### CSS

#### Content Delivery Network (CDN)

You can use the default Semantic UI stylesheet by including a Semantic UI CDN link in yourindex.html file.
This is the quickest way to get started with Semantic UI Vue. You won't be able to use custom themes with this method.

```<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>```

#### Semantic UI CSS package

The Semantic UI CSS package is automatically synced with the main Semantic UI repository to provide a lightweight CSS only version of Semantic UI.
Semantic UI CSS can be installed as a package in your project using NPM. You won't be able to use custom themes with this method.

```$ npm install semantic-ui-css --save```

After install, you'll need to include the minified CSS file in your index.js file:

```import 'semantic-ui-css/semantic.min.css';```

#### Semantic UI package

Install the full Semantic UI package.
Semantic UI includes Gulp build tools so your project can preserve its own theme changes, allowing you to customise the style variables.

Detailed documentation on theming in Semantic UI is provided here.

```$ npm install semantic-ui --save-dev```

After building the project with Gulp, you'll need to include the minified CSS file in your index.js file:

```import '../semantic/dist/semantic.min.css';```
