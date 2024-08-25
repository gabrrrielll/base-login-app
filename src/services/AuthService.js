import SingletonManager from './singleton-manager.js';
// Singleton class for managing user authentication.
// Provides methods for logging in, logging out, and accessing user details.
export class AuthService extends EventTarget {
    constructor() {
        super(...arguments);
        // Initialize a private property to track the authentication status, initially set to false
        this._isAuthenticated = false;
        // Initialize a private property to store user details, initially set to null
        this._userDetails = null;
    }
    // Define a public method to handle user login
    login(userDetails) {
        // Hardcoded credentials for comparison
        const validUsername = 'username';
        const validPassword = 'password';
        // Verify the provided credentials
        if (userDetails.username === validUsername && userDetails.password === validPassword) {
            // Set the authentication status to true
            this._isAuthenticated = true;
            // Store the provided user details
            this._userDetails = userDetails;
            // Dispatch an event to notify about the change in authentication status
            this.dispatchEvent(new Event('auth-changed'));
        }
        else {
            // Dispatch an event to notify about the failed authentication
            this.dispatchEvent(new Event('auth-failed'));
        }
    }
    // Define a public method to handle user logout
    logout() {
        // Set the authentication status to false
        this._isAuthenticated = false;
        // Clear the stored user details
        this._userDetails = null;
        // Dispatch an event to notify about the change in authentication status
        this.dispatchEvent(new Event('auth-changed'));
    }
    // Define a public getter to retrieve the authentication status
    get isAuthenticated() {
        // Return the current authentication status
        return this._isAuthenticated;
    }
    // Define a public getter to retrieve user details
    get userData() {
        if (this._isAuthenticated) {
            // Return the hardcoded user details if the authentication status is true
            return {
                name: 'John Doe',
                email: 'john.doe@example.com',
                phone: '+1 555-555-5555'
            };
        }
        else {
            return null;
        }
    }
}
// Use SingletonManager to get the singleton instance of AuthService
export const authService = SingletonManager.getInstance(AuthService);
//# sourceMappingURL=AuthService.js.map