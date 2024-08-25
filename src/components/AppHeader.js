import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit'; // Importing necessary LitElement modules
import { property, customElement } from 'lit/decorators.js'; // Importing decorator to define custom elements
const logo = new URL('../../../assets/open-wc-logo.svg', import.meta.url).href;
let AppHeader = class AppHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'Base Login App';
    }
    // Rendering the component
    render() {
        return html `
      <div class="header">
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <div class="title"><h2>${this.header}</h2></div>
      </div>
      </div>
    `;
    }
};
// Defining styles for the component
AppHeader.styles = css `
    :host {
      display: block;
      background-color: #002147; /* Background color of the header */
      color: white; /* Text color */
      padding: 10px; /* Padding around the header content */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow for depth effect */
    }

    .header {
      display: flex;
      justify-content: space-between; /* Space items equally apart */
      align-items: center; /* Vertically center items */
    }

    .title {
      display: flex;
      justify-content: center; /* Space items equally apart */
      align-items: center; /* Vertically center items */
      width: calc(100vw - 270px); /* Subtract 80px from 100vw; */
      padding-right: 110px;
    }

    .logo {
      width: 110px; /* Width of the logo image */
      padding-left: 30px; /* Add some margin to the right of the image */
    }

    .logo img {
      width: 100px; /* Width of the logo image */
      height: 100px; /* Height of the logo image */
    }
  `;
__decorate([
    property({ type: String })
], AppHeader.prototype, "header", void 0);
AppHeader = __decorate([
    customElement('app-header') // Defining the custom element named 'app-header'
], AppHeader);
export { AppHeader };
//# sourceMappingURL=AppHeader.js.map