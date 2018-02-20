import { Component, Prop } from "@stencil/core";

@Component({
  tag: "btw-confirm-actions"
})
export class ConfirmActions {

  @Prop() url: string;
  @Prop() label: string = "Delete";
  @Prop() confirmLabel: string = "Confirm";
  @Prop() timeout: number = 4000;
  @Prop() classes: string = "";
  @Prop() buttonType: string = "submit";

  componentDidLoad() {
    // console.log("The component has been rendered");
  }

  handleClickActions(event) {

	const label = event.target;

	event.returnValue;

	if(this.confirmLabel === label.innerHTML) {
		label.innerHTML = this.label;
	} else {
		label.innerHTML = this.confirmLabel
		setTimeout(() => {
			label.innerHTML = this.label
		}, this.timeout)
		event.preventDefault()
	}

  }

  render() {
    if (this.url) {
      return (
        <a
          onClick={(event: UIEvent) => this.handleClickActions(event)}
          href={this.url}
          class={`button-elm ${this.classes}`}
        >
          {this.label}
        </a>
      );
    } else {
      return (
        <button
          onClick={(event: UIEvent) => this.handleClickActions(event)}
          type={this.buttonType}
          class={`button-elm ${this.classes}`}
        >
          {this.label}
        </button>
      );
    }
  }

}
