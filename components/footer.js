class Footer extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = 
        `<address>
        Peter Vang &#183; 1000 W Campus Dr &#183; Wausau &#183; WI &#183; 54401 &#183; pvang2@students.ntc.edu &#183; (715-432-1898)
        </address>`;
    }
}

customElements.define('custom-foot', Footer);