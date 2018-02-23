import { Component, Prop } from "@stencil/core";

@Component({
  tag: "bts-confirm-actions"
})
export class ConfirmActions {
  @Prop() url: string;
  @Prop() label: string = "Delete";
  @Prop() confirmLabel: string = "Confirm";
  @Prop() timeout: number = 4000;
  @Prop() classes: string = "";
  @Prop() buttonClass: string = "button";
  @Prop() buttonType: string = "submit";

  componentDidLoad() {
    // console.log("The component has been rendered");
  }

  handleClickActions(event) {
    const label = event.target;

    event.returnValue;

    if (label.confirmLabel === label.innerHTML) {
      label.innerHTML = this.label;
    } else {
      label.innerHTML = this.confirmLabel;
      setTimeout(() => {
        label.innerHTML = this.label;
      }, this.timeout);
      event.preventDefault();
    }
  }

  render() {
    if (this.url) {
      return (
        <a
          onClick={(event) => this.handleClickActions(event)}
          href={this.url}
          class={`${this.buttonClass} ${this.classes}`}
        >
          {this.label}
        </a>
      );
    } else {
      return (
        <button
          onClick={(event) => this.handleClickActions(event)}
          type={this.buttonType}
          class={`${this.buttonClass} ${this.classes}`}
        >
          {this.label}
        </button>
      );
    }
  }
}
