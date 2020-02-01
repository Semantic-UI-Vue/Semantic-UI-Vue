# Contributing

Semantic UI Vue is a very young project. Every kind of contribution is very welcome.

## How to start

It is very easy:

- Find something to do. There's plenty of it, just check the _What you can do_ section to get any ideas.
- It is suggested to submit an issue first: this can help you avoiding any extra work

Once it is clear what you need to do:

- Fork the project
- Clone it:
  ```
  $ git clone https://github.com/<your username>/Semantic-UI-Vue
  ```
- Make your changes. Here are some good guidelines:
  - Don't worry about making a lot of commits, they will be squashed when the PR is merged
  - Write clear commit messages
  - Respect the coding style. If you don't have it already, install an eslint plugin for your editor
- Test your code

As soon as you get started, submit a pull request. Don't worry if it's still WIP. We don't want more people to work on the same thing. That's frustrating.

## What you can do

### Missing components

There are still a lot of components or components' functionalities missing. You can see Semantic UI Vue's feature status [here](https://semantic-ui-vue.github.io/#/features).

### Documentation

All the components need to get a proper documentation. I am trying to stick to the [official one](https://semantic-ui.com) as much as possible.
You can easily get an idea of what it's missing by comparing the two sites.

A lot of components and a lot of props still have missing descriptions.

Have a look around, if you see anything of this kind, you are very welcome to contribute.

## How to

### Add a component

Every component is in the folder: _src/&lt;component type>/&lt;component name>_.
There is a _.jsx_ file for each component and subcomponent and an _index.js_ that only exports them.

After adding a component, make sure it is correctly exported in the _index.js_ in the parent level too.

### Document a component

Every component can define a custom description of the component itself and its props. Here is an example:

```
{
  name: 'Component',
  description: 'This is the description shown for the component',
  props: {
    propA: {
      type: String,
      default: 'abc',
      description: 'This is the description shown for propA',
    }
  },
}
```

It would be way better to define descriptions with comments. If someone wants to dig into it, please do.

Markdown isn't supported but should be.

There is currently no way to document components' slots.

### Add an example

Every component has its examples in the folder _docs/examples/&lt;component type>/&lt;component name>Example_.

There is an _index.js_ that will export all the sections and examples in the following format:

```
import Example1 from './Example1.example';

export default [
  {
    name: 'Section\'s title',
    examples: [
      {
        name: 'Example1',
        description: 'This is the first example',
        component: Example1,
      },
      /* ... */
    ],
  },
  /* ... */
];
```

It is important that every example's extension is _.example.vue_. This will allow webpack to load the example as a text file.

It's very important to run tests after adding/deleting/updating an example. Read the following sections for details.

### Test

We test the basic rendering of the templates just by taking snapshots of the existing examples. Once you verified that the component's examples work correctly, just run:

```sh
npm run test:update
```

Have a look at the diff and make sure there were no regressions.

_Note_: this will only test that the output of the components didn't change. You still need to manually test any interaction.
