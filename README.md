# Blacktie (beta)

 Blacktie is a framework agnostic reusable collection of Javascript and SASS utilities designed to make it easy to customize FrontEnd frameworks like bootstrap, Bulma Foundation etc.


## Usage

* Clone the repo

```
git clone https://github.com/shawnsandy/blacktie
```

* Install node modules

``` bash
yarn install
```
* Start the development environment

```
yarn run start
```

#### Use the package in you local development by running

* Run `yarn link` in the directory you cloned the package into.
* Run `yarn link "blacktie"` from you local development directory.
* More info on [Package linking](https://yarnpkg.com/lang/en/docs/cli/link/)

## Sass/CSS

At the core of BlackTie is a lightweight SASS/CSS utility library (10.93kb / 2.3Kb gzip) that makes it easy to customize current UI elements, it's goal is not to enhance and not replace your current framework.

## Blacktie WebComponents

**BlackTie** converts commonly used UI elements / patterns (buttons, scroll to top, cards, confirmation actions, contact us page) into an easy to use set of reusable web components that can be dropped into any framework.

> [Web components](https://www.webcomponents.org/introduction) are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

## Stencil WebComponents

> [Stencil](https://stenciljs.com/docs/intro) generates standards-compliant web components, they can work with many popular frameworks right out of the box, and can be used without a framework because they are just web components. Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings). [Github](https://github.com/ionic-team/stencil)

### Confirm Actions

** Adds button or link to confirm critical user actions (delete /update) before submissions**

![Confirm Actions](/confirm-actions.gif)



``` html
<btw-confirm-actions></btw-confirm-actions>
<btw-confirm-actions url="/" label="Remove"></btw-confirm-actions>

```
_________________________________________________

### Top Anchor

BlackTie Top Anchor component add a scroll to top element to any page

![top anchor link](/btw-anchor.gif)

__Scrolling displays hidden top anchor element__

![top anchor link](/scrolling-top.gif)

__Click top anchor to scroll to top of page__

``` html

<btw-top-anchor></btw-top-anchor>

```
_____________

### Upload Component

Replace a basic file input browser element with a Stylized custom upload component.

![File Upload](bts-upload-component.gif)

``` html

<div class="content">
<p><bts-upload-elm></bts-upload-elm></p>
</div>

```

## RiotJS

> Simple and elegant component-based UI library

Coming soon
____________

BlackTie is still under development more info coming soon..
