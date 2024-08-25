import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit'; // Importing necessary LitElement modules
import { customElement, property } from 'lit/decorators.js'; // Importing decorators to define custom elements
import { authService } from '../services/AuthService.js'; // Importing the authService for handling authentication
let UserLogin = class UserLogin extends LitElement {
    constructor() {
        super(...arguments);
        // Defining properties for username and password
        this.username = '';
        this.password = '';
    }
    // When the element is first connected to the DOM, listen for the auth-failed event
    connectedCallback() {
        super.connectedCallback();
        authService.addEventListener('auth-failed', this.handleAuthFailed.bind(this));
    }
    // Handling input changes for both username and password
    handleInputChange(e) {
        const target = e.target;
        this[target.name] = target.value;
    }
    // Method to handle the login action
    login() {
        authService.login({ username: this.username, password: this.password });
    }
    // Method to handle failed login attempts
    handleAuthFailed() {
        alert('Invalid username or password. Please try again.');
    }
    // Rendering the login form
    render() {
        return html `
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
};
// Defining styles for the login component
UserLogin.styles = css `
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
      margin-bottom: 40px;
      font-size: 1.5em;
      color: #333;
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
      margin-top: 10px;
    }

    button:hover {
      background-color: #003366;
    }

    .error {
      color: red;
      margin-bottom: 20px;
    }
  `;
__decorate([
    property({ type: String })
], UserLogin.prototype, "username", void 0);
__decorate([
    property({ type: String })
], UserLogin.prototype, "password", void 0);
UserLogin = __decorate([
    customElement('user-login') // Defining the custom element named 'user-login'
], UserLogin);
export { UserLogin };
//# sourceMappingURL=UserLogin.js.map