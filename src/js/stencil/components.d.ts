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
  MyComponent as MyFirstComponent
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