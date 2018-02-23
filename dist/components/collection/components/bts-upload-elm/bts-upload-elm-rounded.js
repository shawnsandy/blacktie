export class UploadRounded {
    constructor() {
        this.fieldName = "uploads";
        this.classNames = "elm-border-blue ";
        this.labelClass = "lightgrey-elm";
        this.iconClass = "elm-stroke-white";
    }
    render() {
        return (h("bts-upload-elm", { classes: `elm-border elm-rds-rounded ${this.classNames}`, "label-class": this.labelClass, "field-name": this.fieldName, "icon-classes": this.iconClass }));
    }
    static get is() { return "bts-upload-elm-rounded"; }
    static get host() { return { "theme": "upload-elm" }; }
    static get properties() { return { "classNames": { "type": String, "attr": "class-names" }, "fieldName": { "type": String, "attr": "field-name" }, "iconClass": { "type": String, "attr": "icon-class" }, "labelClass": { "type": String, "attr": "label-class" } }; }
}
