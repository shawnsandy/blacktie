export class UploadElm {
    constructor() {
        this.label = "File Upload";
        this.labelClass = "";
        this.iconClasses = "";
        this.iconSize = "24";
        this.placeHolderClass = "";
        this.fieldName = "upload";
        this.required = false;
        this.placeholder = "Select a file to upload";
    }
    componentDidLoad() {
        console.log("The component has been rendered");
    }
    handleSelectUpload(e) {
        console.log(e.currentTarget.files);
        this.placeholder = e.target.files[0].name;
    }
    render() {
        return h("div", { class: `upload-elm ${this.classes}` },
            h("label", { htmlFor: this.fieldName },
                h("input", { type: "file", class: `file-elm`, name: this.fieldName, onChange: e => {
                        this.handleSelectUpload(e);
                    } }),
                h("span", { class: `file-elm-label ${this.labelClass}` },
                    h("div", null,
                        h("bts-svg-elm", { classes: `svg-elm-${this.iconSize} ${this.iconClasses}`, icon: "i-export" }),
                        " ",
                        this.label)),
                h("span", { class: `file-elm-placeholder ${this.placeHolderClass}` },
                    h("div", { class: "placeholder" }, this.placeholder))));
    }
    static get is() { return "bts-upload-elm"; }
    static get properties() { return { "classes": { "type": String, "attr": "classes" }, "fieldName": { "type": String, "attr": "field-name" }, "iconClasses": { "type": String, "attr": "icon-classes" }, "iconSize": { "type": String, "attr": "icon-size" }, "label": { "type": String, "attr": "label" }, "labelClass": { "type": String, "attr": "label-class" }, "placeholder": { "state": true }, "placeHolderClass": { "type": String, "attr": "place-holder-class" }, "required": { "type": Boolean, "attr": "required" } }; }
}
