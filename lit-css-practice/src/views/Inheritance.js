import { LitElement, html, css } from "lit-element";

export class Inheritance extends LitElement {
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

      strong {
        color: blue;
      }
      .basic-text {
        color: green;
      }

      .basic-text--inherit {
        color: green;
      }
      .basic-text--inherit strong {
        /* I could just write green but if some day my parent change I will not... */
        color: inherit;
      }

      aside strong {
        font-weight: initial;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Chapter 5. Inheritance</h1>
        <section class="basic-section">
          <div>
            <p class="basic-text">
              Hello
              <strong> I should be green but I dont inherit my class </strong>
              so that's it
            </p>
          </div>
          <div class="basic-text--inherit">
            <p>
              Hello
              <strong>
                I should be green and I am because I inherit my class
              </strong>
              so that's it
            </p>
          </div>
        </section>
        <section class="basic-section">
          <p>
            <strong
              >I am a strong element that is bold because that is the inherited
              user agent style.</strong
            >
          </p>
          <aside>
            <p>
              <strong
                >I am a strong element but my font weight is normal because it
                is in an aside element and I set it to initial.</strong
              >
            </p>
          </aside>
        </section>
      </div>
    `;
  }
}
customElements.define("view-inheritance", Inheritance);
