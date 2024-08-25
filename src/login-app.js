import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/AppHeader.js';
import './components/AppFooter.js';
import './components/UserLogin.js';
import './components/UserDetails.js';
import { authService } from './services/AuthService.js';
let LoginApp = class LoginApp extends LitElement {
    // When the element is first connected to the DOM, listen for the auth-changed event
    connectedCallback() {
        super.connectedCallback();
        authService.addEventListener('auth-changed', this.handleAuthChange.bind(this));
    }
    // Handle login success by triggering a UI update
    handleAuthChange() {
        this.requestUpdate(); // Request a UI update when auth status changes
    }
    render() {
        return html `
      <app-header></app-header>
      <main>
        <!-- Conditionally render user-login or user-details based on authentication status -->
        ${authService.isAuthenticated
            ? html `
            <user-details></user-details> <!-- Show user details if authenticated -->`
            : html `
            <user-login @login-success=${this.handleAuthChange}></user-login>`}
        <!-- Show login form if not authenticated -->
      </main>
      <app-footer></app-footer>
    `;
    }
};
LoginApp.styles = css `
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      margin: 0 auto;
      text-align: center;
    }

    main {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
    }
  `;
LoginApp = __decorate([
    customElement('login-app')
], LoginApp);
export { LoginApp };
//# sourceMappingURL=login-app.js.map