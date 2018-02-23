export class UploadRounded {
    constructor() {
        this.fieldName = "uploads";
        this.elmColor = "lightgray";
        this.classNames = "";
        this.labelClass = "";
        this.iconClass = "";
    }
    render() {
        return (h("bts-upload-elm", { classes: `elm-border elm-rds-rounded elm-border-${this.elmColor} ${this.classNames}`, "label-class": `${this.elmColor}-elm ${this.labelClass}`, "field-name": this.fieldName, "icon-classes": `${this.elmColor}-elm ${this.iconClass}` }));
    }
    static get is() { return "bts-upload-elm-rounded"; }
    static get host() { return { "theme": "upload-elm" }; }
    static get properties() { return { "classNames": { "type": String, "attr": "class-names" }, "elmColor": { "type": String, "attr": "elm-color" }, "fieldName": { "type": String, "attr": "field-name" }, "iconClass": { "type": String, "attr": "icon-class" }, "labelClass": { "type": String, "attr": "label-class" } }; }
}
