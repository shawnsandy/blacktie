import { Component, Prop } from "@stencil/core";

@Component({
  tag: "bts-upload-elm-rounded",
  host: {
	  theme: 'upload-elm'
  }
})
export class UploadRounded {
  @Prop() fieldName: string = "uploads";
  @Prop() classNames: string = "elm-border-lightgray ";
  @Prop() labelClass: string = "lightgray-elm";
  @Prop() iconClass: string = "elm-stroke-black";

  render() {
    return (
      <bts-upload-elm
        classes={`elm-border elm-rds-rounded ${this.classNames}`}
        label-class={this.labelClass}
        field-name={this.fieldName}
        icon-classes={this.iconClass}
      />
    );
  }
}
