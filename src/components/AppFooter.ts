import { LitElement, html, css } from 'lit'; // Importing necessary LitElement modules
import { customElement } from 'lit/decorators.js'; // Importing decorator to define custom elements

@customElement('app-footer') // Defining the custom element named 'app-footer'
export class AppFooter extends LitElement {
  // Defining styles for the footer component
  static styles = css`
    :host {
      display: block;
      text-align: center; /* Center the text */
      background-color: #002147; /* Background color for the footer */
      color: white; /* Text color for the footer */
      font-size: 0.9em; /* Slightly smaller font size */
      box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect for depth */
      width: 100vw; /* Fill the width of the screen */
    }

    a {
      color: white; /* Link color */
      text-decoration: none; /* Remove underline from links */
    }

    a:hover {
      text-decoration: underline; /* Underline links on hover */
    }
  `;

  // Rendering the footer content
  render() {
    return html`
      <footer>
        <!-- Footer content with a link -->
        <p>🚽 Made with love by
          <a href="https://github.com/open-wc" target="_blank" rel="noopener noreferrer">
            open-wc
          </a>.
        </p>
      </footer>
    `;
  }
}

// Declaring the custom element globally
declare global {
  interface HTMLElementTagNameMap {
    'app-footer': AppFooter;
  }
}
