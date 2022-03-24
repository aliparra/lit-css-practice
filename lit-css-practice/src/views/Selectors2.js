import { LitElement, html, css } from 'lit-element';

export class Selectors2 extends LitElement {
  static get styles() {
    return css`
      .text-block {
        text-align: center;
        margin: 100px;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h3>Capítulo 2. Selectores</h3>
        <p>Contenido css aquí</p>
      </div>
    `;
  }
}
customElements.define('view-selectors-2', Selectors2);