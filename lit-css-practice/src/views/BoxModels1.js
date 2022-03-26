import { LitElement, html, css } from "lit-element";

export class BoxModels1 extends LitElement {
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

      .basic-section__text {
        background-color: #f6cb9f;
        margin: 40px;
      }

      .basic-section__text--border {
        border: 10px dotted red;
      }

      .basic-section__text--outline {
        outline: 10px dotted blue;
      }

      .basic-section__text--shadow {
        box-shadow: 60px -10px teal;
      }

      #sub-section-2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .section__box--fixed {
        width: 100px;
        height: 100px;
        border: 2px solid black;
      }

      .section__box--intrinsic {
        width: min-content;
        height: min-content;
        border: solid 1px black;
      }

      #section__box--scroll-overflow {
        overflow: scroll;
      }

      #section__box--hidden-overflow {
        overflow: hidden;
      }

      .big-text {
        font-size: 30px;
      }

      #sub-section-3{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .sub-section-3__content-box{
        
        box-sizing: content-box;
        background-color: pink;
        width: 200px;
        padding: 10px;
        border: 5px solid magenta;
      }

      .sub-section-3__border-box{
        box-sizing: border-box;
        background-color: pink;
        width: 200px;
        padding: 10px;
        border: 5px solid magenta;
      }
    `;
  }

  render() {
    return html`
      <div class="text-block">
        <h1>Chapter 1. Box models</h1>
        <section class="basic-section">
          <h2>Border vs Outline vs BoxShadow</h2>
          <p class=" basic-section__text basic-section__text--border">
            I have a border
          </p>
          <p class="basic-section__text basic-section__text--outline">
            I have an outline
          </p>
          <p class="basic-section__text basic-section__text--shadow">
            I have a box-shadow
          </p>
        </section>
        <section class="basic-section ">
          <h2>Fixed size vs scrollable vs hidden vs min content</h2>
          <div id="sub-section-2">
            <div class="section__box--fixed">
              <p class="big-text">I can get out of the box</p>
            </div>
            <div
              class="section__box--fixed "
              id="section__box--scroll-overflow"
            >
              <p class="big-text">My content is scrollable</p>
            </div>
            <div
              class="section__box--fixed "
              id="section__box--hidden-overflow"
            >
              <p class="big-text">I hide my overflow content</p>
            </div>
            <div class="section__box--intrinsic">
              <p class="big-text">I adapt the box intrinsic</p>
            </div>
          </div>
        </section>
        <section class="basic-section ">
          <h2>Box sizing</h2>
          <div id="sub-section-3">
            <div class="sub-section-3__content-box">
              <p>Content box - 200px + padding + border = 230px</p>
            </div>
            <div>
              <p class="sub-section-3__border-box">Border box - 200 px pushing padding and border = 200px</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
customElements.define("box-models-1", BoxModels1);
