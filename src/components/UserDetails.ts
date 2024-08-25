import { LitElement, html, css } from 'lit'; // Importing necessary LitElement modules
import { customElement } from 'lit/decorators.js'; // Importing decorators to define custom elements
import { authService } from '../services/AuthService.js'; // Importing the authService for getting user details

@customElement('user-details') // Defining the custom element named 'user-details'
export class UserDetails extends LitElement {
  // Defining styles for the user details component
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      max-width: 500px;
      margin: auto;
      background-color: #f7f7f7;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: left;
    }

    h2 {
      margin-bottom: 40px;
      font-size: 1.5em;
      color: #333;
      text-align: center;
    }

    p {
      margin: 10px 0;
      color: #555;
    }

    button {
      width: 490px;
      padding: 10px;
      background-color: #002147;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1em;
      cursor: pointer;
      margin-top: 20px;
    }

    button:hover {
      background-color: #003366;
    }
  `;

  // Rendering the user details content
  render() {
    const { userData } = authService; // Retrieve user data from authService

    return html`
      <h2>User Details</h2> <!-- Section title -->
      <p><strong>Name:</strong> ${userData?.name}</p> <!-- Display user name -->
      <p><strong>Email:</strong> ${userData?.email}</p> <!-- Display user email -->
      <p><strong>Phone:</strong> ${userData?.phone}</p> <!-- Display user phone -->
      <button @click=${this.logout}>Logout</button> <!-- Logout button -->
    `;
  }

  // Method to handle the logout action
  private logout() {
    authService.logout(); // Call authService to logout
    this.dispatchEvent(new CustomEvent('logout-success')); // Dispatch a custom event for successful logout
  }
}

// Declaring the custom element globally
declare global {
  interface HTMLElementTagNameMap {
    'user-details': UserDetails;
  }
}
