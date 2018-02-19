export class TopAnchorContent {
    render() {
        return (h("slot", null));
    }
    static get is() { return "btw-top-anchor-content"; }
}
