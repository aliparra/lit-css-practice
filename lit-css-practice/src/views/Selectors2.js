import { LitElement, html, css } from "lit-element";

export class Selectors2 extends LitElement {
  static get styles() {
    return css`
      .text-block {
        text-align: center;
        margin: 100px;
      }

      .basic-section {
        margin: 20px;
        background-color: #a69c9ccf;
        padding: 20px;
      }

      #sub-section-1 {
        display: flex;
        justify-content: space-around;
      }

      [data-type="blue"] {
        color: blue;
      }

      [data-type="red"] {
        color: red;
      }

      [data-type] {
        width: min-content;
        padding: 10px;
      }

      [background-id] {
        width: min-content;
        padding: 10px;
        background-color: grey;
      }

      [href^="https"] {
        color: green;
      }

      span:nth-child(even) {
        background: mediumseagreen;
      }

      em:hover {
        background: yellowgreen;
        cursor: pointer;
      }

      .pseudo-element::before,
      .pseudo-element::after {
        content: "*";
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h3>Chapter 2. Selectors</h3>
        <section class="basic-section">
          <h2>Atributtes selector</h2>
          <div id="sub-section-1">
            <p data-type="blue" background-id="1">
              I have a blue data-type and background-id (Change color and
              background)
            </p>
            <p data-type="red">
              I do not have background-id but I have an red data-type (Change
              only color)
            </p>
            <p background-id="3">
              I do not have data type attribute but I have a background-id
              (Change only background)
            </p>

            <a href="https://google.com"
              >This link contains https so I paint it green</a
            >
          </div>
        </section>
        <section class="basic-section">
          <h2>Pseudoclasses: Add style to even spans or add hover effects</h2>
          <div id="sub-section-2">
            <span>Text 1</span>
            <span>Text 2</span>
            <span>Text 3</span>
            <span>Text 4</span>
            <em>Hover me</em>
          </div>
        </section>
        <section class="basic-section">
          <h2>Pseudoelements: Add a * before and after elements</h2>
          <div id="sub-section-2">
            <p class="pseudo-element">Hola</p>
            <p class="pseudo-element">Hello</p>
            <p class="pseudo-element">Bonjour</p>
          </div>
        </section>
        <section class="basic-section">
          <h2>Combiners</h2>
          <div id="sub-section-2">
            <p class="pseudo-element">Hola <b> como estás</b> amigo</p>
            <p class="pseudo-element">Hello</p>
            <p class="pseudo-element">Bonjour</p>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define("view-selectors-2", Selectors2);
