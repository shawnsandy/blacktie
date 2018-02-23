import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "bts-upload-elm"
})
export class UploadElm {
  @Prop() label: string = "File Upload";
  @Prop() classes: string = "elm-border";
  @Prop() labelClass: string = "";
  @Prop() iconClasses: string = "";
  @Prop() iconSize: string = "24";
  @Prop() placeHolderClass: string = "";
  @Prop() fieldName: string = "upload";
  @Prop() required: boolean = false;
  @Prop() elmColor: string = "lightgray";

  @State() placeholder: string = "Select a file to upload";

  componentDidLoad() {
    //console.log("The component has been rendered");
  }

  handleSelectUpload(e) {
    console.log(e.currentTarget.files);
    this.placeholder = e.target.files[0].name;
  }

  render() {
    return <div class={`upload-elm`}>
        <label htmlFor={this.fieldName} class={`${this.classes}`}>
          <input type="file" class={`file-elm`} name={this.fieldName} onChange={e => {
              this.handleSelectUpload(e);
            }} />
          <span class={`file-elm-label ${this.elmColor}-elm ${this.labelClass}`}>
            <div>
              <bts-svg-elm classes={`svg-elm-${this.iconSize} ${this.elmColor}-elm ${this.iconClasses}`} icon="i-export" /> {this.label}
            </div>
          </span>
          <span class={`file-elm-placeholder ${this.placeHolderClass}`}>
            <div class="placeholder">{this.placeholder}</div>
          </span>
        </label>
      </div>;
  }
}
