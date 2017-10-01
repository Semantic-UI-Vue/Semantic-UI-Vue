# Contributing

Semantic UI Vue is a very young project. Every kind of contribution is very welcome.

## How to start

It is very easy:

* Find something to do. There's plenty of it, just check the *What you can do* section to get any ideas.
* It is suggested to submit an issue first: this can help you avoiding any extra work

Once it is clear what you need to do:

* Fork the project
* Clone it:
  ```
  $ git clone https://github.com/<your username>/Semantic-UI-Vue
  ```
* Make your changes. Here are some good guidelines:
  * Don't worry about making a lot of commits, they will be squashed when the PR is merged
  * Write clear commit messages
  * Respect the coding style. If you don't have it already, install an eslint plugin for your editor
* Test your code

As soon as you get started, submit a pull request. Don't worry if it's still WIP. We don't want more people to work on the same thing. That's frustrating.

Please make sure to submit PRs against the development branch! Master represents the state of the latest release.

## What you can do

### Missing components

There are still a lot of components or components' functionalities missing. Please have a look to the [*Semantic UI*'s site](https://semantic-ui.com) and help yourself!

### Code coverage

Any help to bring the code coverage up is very welcome. To see the current state file by file:

* Run `npm test`
* Open *test/coverage/lcov-report/index.html*

### Documentation

All the components need to get a proper documentation. I am trying to stick to the [official one](https://semantic-ui.com) as much as possible.
You can easily get an idea of what it's missing by comparing the two sites.

A lot of components and a lot of props still have missing descriptions.

Have a look around, if you see anything of this kind, you are very welcome to contribute.

## How to

### Add a component

Every component is in the folder: *src/&lt;component type>/&lt;component name>*.
There is a *.jsx* file for each component and subcomponent and an *index.js* that only exports them.

After adding a component, make sure it is correctly exported in the *index.js* in the parent level too.

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

Every component has its examples in the folder *docs/examples/&lt;component type>/&lt;component name>Example*.

There is an *index.js* that will export all the sections and examples in the following format:

```
import Example1 from './Example1.example';

export default [
  {
    title: 'Section\'s title',
    examples: [
      {
        title: 'Example1',
        description: 'This is the first example',
        component: Example1,
      },
      /* ... */
    ],
  },
  /* ... */
];
```

It is important that every example's extension is *.example.vue*. This will allow webpack to load the example as a text file.
