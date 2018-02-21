export class UploadElm {
    constructor() {
        this.label = "File Upload";
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
                h("input", { type: "file", class: "file-elm", name: this.fieldName, onChange: e => {
                        this.handleSelectUpload(e);
                    } }),
                h("span", { class: "file-elm-label" },
                    h("div", null,
                        h("bts-svg-elm", { classes: "svg-elm-24", icon: "i-export" }),
                        " ",
                        this.label)),
                h("span", { class: "file-elm-placeholder" },
                    h("div", { class: "placeholder" }, this.placeholder)))));
    }
    static get is() { return "bts-upload-elm"; }
    static get properties() { return { "classes": { "type": String, "attr": "classes" }, "fieldName": { "type": String, "attr": "field-name" }, "label": { "type": String, "attr": "label" }, "placeholder": { "state": true }, "required": { "type": Boolean, "attr": "required" } }; }
}
