import { LitElement, html, css } from "lit-element";

export class Header extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      #header-wrapper {
        padding: 20px;
        background-color: #2b2727a6;
      }

      .links-sec__link--bold-purple {
        color: #53056b;
        text-decoration: none;
        font-weight: bold;
      }

      .links-sec__link--size24 {
        font-size: 24px;
      }
    `;
  }

  render() {
    return html`
      <header id="header-wrapper">
        <a class="links-sec__link--bold-purple links-sec__link--size24" href="/"
          >Go home</a
        >
      </header>
    `;
  }
}
customElements.define("app-header", Header);
