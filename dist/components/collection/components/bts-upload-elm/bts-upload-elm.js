export class UploadElm {
    constructor() {
        this.label = "File Upload";
        this.labelClass = '';
        this.placeHolderClass = '';
        this.fieldName = "upload";
        this.required = false;
        this.placeholder = 'Select a file to upload';
    }
    componentDidLoad() {
        console.log("The component has been rendered");
    }
    handleSelectUpload(e) {
        console.log(e.currentTarget.files);
        this.placeholder = e.target.files[0].name;
    }
    render() {
        return (h("div", { class: "upload-elm" },
            h("label", { htmlFor: this.fieldName },
                h("input", { type: "file", class: `file-elm ${this.classes}`, name: this.fieldName, onChange: e => {
                        this.handleSelectUpload(e);
                    } }),
                h("span", { class: `file-elm-label ${this.labelClass}` },
                    h("div", null,
                        h("bts-svg-elm", { classes: "svg-elm-24", icon: "i-upload" }),
                        " ",
                        this.label)),
                h("span", { class: `file-elm-placeholder ${this.placeHolderClass}` },
                    h("div", { class: "placeholder" }, this.placeholder)))));
    }
    static get is() { return "bts-upload-elm"; }
    static get properties() { return { "classes": { "type": String, "attr": "classes" }, "fieldName": { "type": String, "attr": "field-name" }, "label": { "type": String, "attr": "label" }, "labelClass": { "type": String, "attr": "label-class" }, "placeholder": { "state": true }, "placeHolderClass": { "type": String, "attr": "place-holder-class" }, "required": { "type": Boolean, "attr": "required" } }; }
}
