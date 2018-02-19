//import { u } from 'umbrellajs'
export class TopAnchor {
    constructor() {
        this.classes = "back-to-top animated bounceInUp elm-hide";
    }
    componentDidLoad() {
        const screenHeight = window.innerHeight;
        const topLink = document.querySelector('.back-to-top');
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > screenHeight) {
                topLink.classList.remove('elm-hide');
            }
            else {
                topLink.classList.add('elm-hide');
            }
        });
    }
    render() {
        return (h("span", null,
            h("a", { "data-scroll": true, href: "#body", class: this.classes },
                h("i", { class: "im im-arrow-up-circle is-2" }))));
    }
    static get is() { return "btw-top-anchor"; }
    static get host() { return { "theme": "top", "role": "navigation" }; }
    static get properties() { return { "classes": { "type": String, "attr": "classes" } }; }
}
