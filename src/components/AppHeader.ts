import { LitElement, html, css } from 'lit'; // Importing necessary LitElement modules
import { customElement } from 'lit/decorators.js'; // Importing decorator to define custom elements
import { authService } from '../services/AuthService.js'; // Importing the authService for user authentication

@customElement('app-header') // Defining the custom element named 'app-header'
export class AppHeader extends LitElement {
  // Defining styles for the component
  static styles = css`
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
      width: calc(100vw - 80px); /* Subtract 20px from 100vw; */
      padding: 10px 30px /* Fill the width of the parent element */
    }
    .logo img {
      height: 40px; /* Height of the logo image */
    }
    .user-icon {
      position: relative; /* Position for the dropdown */
      cursor: pointer; /* Change cursor to pointer on hover */
    }
    .dropdown {
      display: none; /* Initially hide dropdown */
      position: absolute; /* Absolute position relative to the user icon */
      right: 0;
      background-color: white; /* Background of the dropdown */
      color: black; /* Text color of the dropdown */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Shadow for dropdown */
      z-index: 1; /* Ensure dropdown is on top */
    }
    .dropdown a {
      padding: 8px 16px; /* Padding inside the dropdown links */
      display: block; /* Display as block to fill the width */
      text-decoration: none; /* Remove underline from links */
      color: black; /* Text color of links */
    }
    .dropdown a:hover {
      background-color: #ddd; /* Background color on hover */
    }
    .user-icon:hover .dropdown {
      display: block; /* Show dropdown on hover */
    }
  `;

  // Method to handle login
  private login() {
    authService.login({ name: 'John Doe', email: 'johndoe@example.com' }); // Logging in with dummy data
    this.requestUpdate(); // Requesting a UI update
  }

  // Method to handle logout
  private logout() {
    authService.logout(); // Logging out the user
    this.requestUpdate(); // Requesting a UI update
  }

  // Rendering the component
  render() {
    return html`
      <div class="header">
        <div class="logo">
          <img src="https://via.placeholder.com/150" alt="Logo" /> <!-- Placeholder for the logo -->
        </div>
        <div class="user-icon">
          <img src="https://via.placeholder.com/40" alt="User Icon" /> <!-- Placeholder for the user icon -->
          <div class="dropdown">
            ${authService.isAuthenticated
      ? html`<a href="#" @click="${this.logout}">Logout</a> <!-- Show logout if authenticated -->`
    : html`<a href="#" @click="${this.login}">Login</a>`} <!-- Show login if not authenticated -->
          </div>
        </div>
      </div>
    `;
  }

}

// Declaring the custom element globally
declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
