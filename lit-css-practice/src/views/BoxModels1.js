import { LitElement, html, css } from 'lit-element';

export class BoxModels1 extends LitElement {
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
        <h3>Chapter 1. Box models</h3>
      </div>
    `;
  }
}
customElements.define('box-models-1', BoxModels1);