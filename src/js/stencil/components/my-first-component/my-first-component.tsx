import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'my-first-component'
})
export class MyComponent {
  // Indicate that name should be a public property on the component
  @Prop() name: string;
  @Prop() classname: string ;

  render() {
    return (
      <span>
        <p class={`selector ${this.classname}`}>
          My name is {this.name}...
          <slot />
        </p>
        <p>
          <button class="button">Button</button>
        </p>
        <hr />
      </span>
    );
  }
}
