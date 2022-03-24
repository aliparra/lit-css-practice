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

      header {
        display: flex;
        justify-content: space-between;
        padding: 10px 25px;
        background-color: var(--black-bg-color);
      }
    `;
  }

  render() {
    return html`
      <header>
        <a href="/">Go home</a>
      </header>
    `;
  }
}
customElements.define("app-header", Header);
