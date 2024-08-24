import { LitElement, html, css } from 'lit'; // Importing necessary LitElement modules
import { customElement, property } from 'lit/decorators.js'; // Importing decorators to define custom elements
import { authService } from '../services/AuthService.js'; // Importing the authService for handling authentication

@customElement('user-login') // Defining the custom element named 'user-login'
export class UserLogin extends LitElement {
  // Defining properties for username and password
  @property({ type: String }) username = '';

  @property({ type: String }) password = '';

  // Defining styles for the login component
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      max-width: 500px;
      margin: auto;
      background-color: #f7f7f7;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-bottom: 20px;
      font-size: 1.5em;
      color: #333;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: #555;
    }

    input[type='text'],
    input[type='password'] {
      width: 470px;
      padding: 6px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1em;
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
    }

    button:hover {
      background-color: #003366;
    }

    .error {
      color: red;
      margin-bottom: 20px;
    }
  `;

  // Rendering the login form
  render() {
    return html`
      <h2>Login</h2>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        .value=${this.username}
        @input=${this.handleInputChange}
      />

      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        .value=${this.password}
        @input=${this.handleInputChange}
      />

      <button @click=${this.login}>Login</button>
    `;
  }

  // Handling input changes for both username and password
  private handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this[target.name as 'username' | 'password'] = target.value;
  }

  // Method to handle the login action
  private login() {
    if (this.username && this.password) {
      authService.login({ name: this.username, password: this.password });
      console.log('Login successful', this.username, this.password);
    } else {
      alert('Please enter both username and password.');
    }
  }
}

// Declaring the custom element globally
declare global {
  interface HTMLElementTagNameMap {
    'user-login': UserLogin;
  }
}
