import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "bts-upload-elm"
})
export class UploadElm {
  @Prop() label: string = "File Upload";
  @Prop() classes: string;
  @Prop() fieldName: string = "upload";
  @Prop() required: boolean = false;

  @State() placeholder:string = 'Select a file to upload'

  componentDidLoad() {
	console.log("The component has been rendered");

  }

  handleSelectUpload(e) {
	console.log(e.currentTarget.files);
	this.placeholder = e.target.files[0].name;
  }

  render() {
    return (
      <div class="upload-elm">
        <label htmlFor={this.fieldName}>
          <input
            type="file"
            class="file-elm"
            name={this.fieldName}
            onChange={e => {
              this.handleSelectUpload(e);
            }}
          />
          <span class="file-elm-label">
            <div>
              <bts-svg-elm classes="svg-elm-24" icon="i-export" /> {this.label}
            </div>
          </span>
          <span class="file-elm-placeholder">
            <div class="placeholder">{this.placeholder}</div>
          </span>
        </label>
      </div>
    );
  }
}
