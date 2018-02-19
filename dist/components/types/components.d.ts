/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  CardElmContent as BtCardElmContent
} from './components/bt-card-elm/bt-card-elm-content';

declare global {
  interface HTMLBtCardElmContentElement extends BtCardElmContent, HTMLStencilElement {
  }
  var HTMLBtCardElmContentElement: {
    prototype: HTMLBtCardElmContentElement;
    new (): HTMLBtCardElmContentElement;
  };
  interface HTMLElementTagNameMap {
    "bt-card-elm-content": HTMLBtCardElmContentElement;
  }
  interface ElementTagNameMap {
    "bt-card-elm-content": HTMLBtCardElmContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bt-card-elm-content": JSXElements.BtCardElmContentAttributes;
    }
  }
  namespace JSXElements {
    export interface BtCardElmContentAttributes extends HTMLAttributes {
      className?: string;
    }
  }
}


import {
  CardElmHeader as BtCardElmHeader
} from './components/bt-card-elm/bt-card-elm-header';

declare global {
  interface HTMLBtCardElmHeaderElement extends BtCardElmHeader, HTMLStencilElement {
  }
  var HTMLBtCardElmHeaderElement: {
    prototype: HTMLBtCardElmHeaderElement;
    new (): HTMLBtCardElmHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "bt-card-elm-header": HTMLBtCardElmHeaderElement;
  }
  interface ElementTagNameMap {
    "bt-card-elm-header": HTMLBtCardElmHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bt-card-elm-header": JSXElements.BtCardElmHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface BtCardElmHeaderAttributes extends HTMLAttributes {
      className?: string;
    }
  }
}


import {
  CardElm as BtCardElm
} from './components/bt-card-elm/bt-card-elm';

declare global {
  interface HTMLBtCardElmElement extends BtCardElm, HTMLStencilElement {
  }
  var HTMLBtCardElmElement: {
    prototype: HTMLBtCardElmElement;
    new (): HTMLBtCardElmElement;
  };
  interface HTMLElementTagNameMap {
    "bt-card-elm": HTMLBtCardElmElement;
  }
  interface ElementTagNameMap {
    "bt-card-elm": HTMLBtCardElmElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "bt-card-elm": JSXElements.BtCardElmAttributes;
    }
  }
  namespace JSXElements {
    export interface BtCardElmAttributes extends HTMLAttributes {
      className?: string;
      title?: string;
    }
  }
}


import {
  TopAnchor as BtwTopAnchor
} from './components/bt-top-anchor/btw-top-anchor';

declare global {
  interface HTMLBtwTopAnchorElement extends BtwTopAnchor, HTMLStencilElement {
  }
  var HTMLBtwTopAnchorElement: {
    prototype: HTMLBtwTopAnchorElement;
    new (): HTMLBtwTopAnchorElement;
  };
  interface HTMLElementTagNameMap {
    "btw-top-anchor": HTMLBtwTopAnchorElement;
  }
  interface ElementTagNameMap {
    "btw-top-anchor": HTMLBtwTopAnchorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "btw-top-anchor": JSXElements.BtwTopAnchorAttributes;
    }
  }
  namespace JSXElements {
    export interface BtwTopAnchorAttributes extends HTMLAttributes {
      classes?: string;
    }
  }
}


import {
  MyFirstComponent as MyFirstComponent
} from './components/my-first-component/my-first-component';

declare global {
  interface HTMLMyFirstComponentElement extends MyFirstComponent, HTMLStencilElement {
  }
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };
  interface HTMLElementTagNameMap {
    "my-first-component": HTMLMyFirstComponentElement;
  }
  interface ElementTagNameMap {
    "my-first-component": HTMLMyFirstComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-first-component": JSXElements.MyFirstComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyFirstComponentAttributes extends HTMLAttributes {
      classname?: string;
      name?: string;
    }
  }
}


import {
  MyComponent as MyComponent
} from './template';

declare global {
  interface HTMLMyComponentElement extends MyComponent, HTMLStencilElement {
  }
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    "my-component": HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    "my-component": HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-component": JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      name?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
