import { Component, Prop } from "@stencil/core";

@Component({
  tag: "my-component"
})

export class MyComponent {

@Prop() name: string;


  componentWillLoad() {
	console.log("The component is about to be rendered");
  }

  componentDidLoad() {
	console.log("The component has been rendered");
  }

  componentWillUpdate() {
	console.log("The component will update");
  }

  componentDidUpdate() {
	console.log("The component did update");
  }

  componentDidUnload() {
	console.log("The view has been removed from the DOM");
  }

  render() {
	return <p>My name is {this.name}</p>;
  }
}
