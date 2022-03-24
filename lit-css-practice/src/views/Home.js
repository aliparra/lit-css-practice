import { LitElement, html, css } from 'lit-element';

export class Home extends LitElement {
  static get styles() {
    return css`
      .text-block {
        text-align: center;
        margin: 100px;
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
      <div class="text-block">
        <h3>Welcome to ${this.name}'s css and lit lab</h3>
        <p>I want to refresh all I learned some time ago and leran more things</p>
        <div>
            <ul>
                <li><a href='/box-models'>Box models</a></li>
                <li><a href='/selectors'>Selectors</a></li>
            </ul>
        </div>
      </div>
    `;
  }
}
customElements.define('my-home', Home);