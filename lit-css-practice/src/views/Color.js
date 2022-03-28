import { LitElement, html, css } from "lit-element";

export class Color extends LitElement {
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

      .example-text {
        border: 2px solid currentColor;
        padding: 5px;
      }
      .example-text--red {
        /*  First value could be in deg, any angle unit or without anything, but second and third value must be in % */
        color: hsl(350deg, 80%, 50%);
      }

      .box-gradient {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .box-gradient--ocean {
        background: linear-gradient(to top, #433bb1, #9198e5, #f9fafd);
        height: 100px;
        /* hsl The first value is in degrees, second is saturation and third is lightness */
        color: hsl(300, 0%, 100%);
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Chapter 5. Inheritance</h1>
        <section class="basic-section">
          <p class="example-text example-text--red">
            My border should have the same color than me thanks to currentColor
            value
          </p>
        </section>
        <section class="basic-section">
          <div class="box-gradient box-gradient--ocean">
            <p>I have a linear gradient!!</p>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define("view-color", Color);
