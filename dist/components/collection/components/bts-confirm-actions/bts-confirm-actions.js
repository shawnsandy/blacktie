export class ConfirmActions {
    constructor() {
        this.label = "Delete";
        this.confirmLabel = "Confirm";
        this.timeout = 4000;
        this.classes = "";
        this.buttonClass = "button";
        this.buttonType = "submit";
    }
    componentDidLoad() {
        // console.log("The component has been rendered");
    }
    handleClickActions(event) {
        const label = event.target;
        event.returnValue;
        if (label.confirmLabel === label.innerHTML) {
            label.innerHTML = this.label;
        }
        else {
            label.innerHTML = this.confirmLabel;
            setTimeout(() => {
                label.innerHTML = this.label;
            }, this.timeout);
            event.preventDefault();
        }
    }
    render() {
        if (this.url) {
            return (h("a", { onClick: (event) => this.handleClickActions(event), href: this.url, class: `${this.buttonClass} ${this.classes}` }, this.label));
        }
        else {
            return (h("button", { onClick: (event) => this.handleClickActions(event), type: this.buttonType, class: `${this.buttonClass} ${this.classes}` }, this.label));
        }
    }
    static get is() { return "bts-confirm-actions"; }
    static get properties() { return { "buttonClass": { "type": String, "attr": "button-class" }, "buttonType": { "type": String, "attr": "button-type" }, "classes": { "type": String, "attr": "classes" }, "confirmLabel": { "type": String, "attr": "confirm-label" }, "label": { "type": String, "attr": "label" }, "timeout": { "type": Number, "attr": "timeout" }, "url": { "type": String, "attr": "url" } }; }
}
