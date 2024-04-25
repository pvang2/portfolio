class Header extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = 
        `<nav class="List">
            <ul>
                <li><a href="Index.html">Home</a></li>
                <li><a href="Resume.html">Resume</a></li>
                <li><a href="Projects.html">Projects</a></li>
                <li id="contact"><a href="Contact.html">Contact</a></li>
            </ul>
        </nav>`;
    }
}

customElements.define('custom-nav', Header);