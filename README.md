# Blacktie (beta)

 Blacktie is a framework agnostic reusable collection of Javascript and SASS utilities designed to make it easy to customize FrontEnd frameworks like bootstrap, Bulma Foundation etc.


## Usage

* Clone the repo

```
git clone https://github.com/shawnsandy/blacktie
```

```bash
yarn install
```

```
yarn run start
```


## Blacktie WebComponents

We converted some of the most commonly used UI elements / patterns (buttons, scroll to top, cards, confirmation actions, contact us page) into an easy to use set of reusable web components that can be dropped into any framework.

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

### Top Anchor

![top anchor link](/btw-anchor.gif)


![top anchor link](/scrolling-top.gif)


BlackTie Top Anchor component add a scroll to top anchor to any page

``` html
<btw-top-anchor></btw-top-anchor>
```

## RiotJS

> Simple and elegant component-based UI library



Coming soon

BlackTie is still under development more info coming soon..
