import { LitElement, html, css } from "lit-element";

export class Home extends LitElement {
  static get styles() {
    return css`

    
      .home-main-content {
        padding: 5px 20px;
        background-color: #adaacf
      }
      .links-sec__list {
        list-style: none;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 0px;
      }

      .links-sec__list-item {
        padding: 5px;
      }

      .links-sec__link--bold-blue {
        color: #3e31ff;
        text-decoration: none;
        font-weight: bold;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Alice";
  }

  render() {
    return html`
      <div class="home-main-content">
        <nav>
          <h3>Welcome to ${this.name}'s css and lit lab</h3>
          <p>I want to refresh concepts and learn new ones :D</p>
        </nav>
        <section class="links-sec">
          <h3>Avaiable Chapters:</h3>
          <ul class="links-sec__list">
            <li class="links-sec__list-item">
              <a class="links-sec__link--bold-blue" href="/box-models"
                >Box models</a
              >
            </li>
            <li class="links-sec__list-item">
              <a class="links-sec__link--bold-blue" href="/selectors">Selectors</a>
            </li>
          </ul>
        </section>
      </div>
    `;
  }
}
customElements.define("my-home", Home);
