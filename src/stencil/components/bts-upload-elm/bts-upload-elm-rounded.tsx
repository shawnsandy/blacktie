import { Component, Prop } from "@stencil/core";

@Component({
  tag: "bts-upload-elm-rounded",
  host: {
    theme: "upload-elm"
  }
})
export class UploadRounded {
  @Prop() fieldName: string = "uploads";
  @Prop() elmColor: string = "lightgray";
  @Prop() classNames: string = "elm-rds-rounded ";
  @Prop() labelClass: string = "";
  @Prop() iconClass: string = "";

  render() {
    return (
      <bts-upload-elm
        classes={`elm-border elm-border-${this.elmColor} ${this.classNames}`}
        field-name={this.fieldName}
        icon-classes={this.iconClass}
        elm-color={this.elmColor}
      />
    );
  }
}
