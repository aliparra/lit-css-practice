import { html, css, LitElement } from "lit";
import { Router } from "@vaadin/router";

import "./views/BoxModels1";
import "./views/Selectors2";
import "./views/Home";

import "./Components/Header";

export class MyApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

 

  constructor() {
    super();
    this.name = "World";
    this.count = 0;
  }

  firstUpdated() {
    const router = new Router(this.renderRoot.querySelector("main"));
    router.setRoutes([
      { path: "/", component: "my-home" },
      { path: "/box-models", component: "box-models-1" },
      { path: "/selectors", component: "view-selectors-2" },
    ]);
  }

  render() {
    return html`
      <main id="page-container">
        <app-header></app-header>
      </main>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define("my-app", MyApp);
