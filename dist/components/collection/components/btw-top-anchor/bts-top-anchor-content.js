export class TopAnchorContent {
    render() {
        return (h("slot", null));
    }
    static get is() { return "bts-top-anchor-content"; }
}
