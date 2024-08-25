import { fixture, html } from '@open-wc/testing'; // Importing testing utilities
import { expect } from '@esm-bundle/chai'; // Importing Chai assertion library
import { authService } from '../src/services/AuthService.js'; // Import authService to control authentication
describe('UserLogin', () => {
    // Set up the environment before each test
    beforeEach(() => {
        // Ensure the user is not authenticated before rendering the component
        authService.logout(); // This should set isAuthenticated to false
    });
    // Test to check if the component renders correctly
    it('should render the form with input fields and a button', async () => {
        const el = await fixture(html ` <user-login></user-login>`); // Creating an instance of the component
        await el.updateComplete; // Wait for the element to render fully
        // Check if shadowRoot is not null
        if (el.shadowRoot) {
            // Check if the username input exists
            const usernameInput = el.shadowRoot?.querySelector('input[name="username"]');
            expect(usernameInput).to.exist;
            await expect(usernameInput?.getAttribute('type')).to.equal('text');
            // Check if the password input exists
            const passwordInput = el.shadowRoot?.querySelector('input[name="password"]');
            expect(passwordInput).to.exist;
            await expect(passwordInput?.getAttribute('type')).to.equal('password');
            // Check if the button exists
            const button = el.shadowRoot?.querySelector('button');
            expect(button).to.exist;
            await expect(button?.textContent?.trim()).to.equal('Login');
        }
    });
    // Test to check if username and password properties are updated correctly
    it('should update username and password properties when inputs change', async () => {
        const el = await fixture(html ` <user-login></user-login>`); // Creating an instance of the component
        await el.updateComplete; // Wait for the element to render fully
        if (el.shadowRoot) {
            const usernameInput = el.shadowRoot?.querySelector('input[name="username"]');
            const passwordInput = el.shadowRoot?.querySelector('input[name="password"]');
            // Simulate input for username
            usernameInput.value = 'testuser';
            usernameInput.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
            await expect(el.username).to.equal('testuser');
            // Simulate input for password
            passwordInput.value = 'testpassword';
            passwordInput.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
            await expect(el.password).to.equal('testpassword');
        }
    });
});
//# sourceMappingURL=user-login.test.js.map