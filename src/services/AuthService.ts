// Import the SingletonManager
import SingletonManager from './singleton-manager.js';

// Singleton class for managing user authentication.
// Provides methods for logging in, logging out, and accessing user details.
export class AuthService {

  // Initialize a private property to track the authentication status, initially set to false
  private _isAuthenticated: boolean = false;

  // Initialize a private property to store user details, initially set to null
  private _userDetails: { name: string; email: string } | null = null;

  // Define a public method to handle user login
  public login(userDetails: { name: string; email: string }) {
    // Set the authentication status to true
    this._isAuthenticated = true;
    // Store the provided user details
    this._userDetails = userDetails;
  }

  // Define a public method to handle user logout
  public logout() {
    // Set the authentication status to false
    this._isAuthenticated = false;
    // Clear the stored user details
    this._userDetails = null;
  }

  // Define a public getter to retrieve the authentication status
  public get isAuthenticated(): boolean {
    // Return the current authentication status
    return this._isAuthenticated;
  }

  // Define a public getter to retrieve the stored user details
  public get userDetails(): { name: string; email: string } | null {
    // Return the stored user details
    return this._userDetails;
  }
}

// Use SingletonManager to get the singleton instance of AuthService
export const authService = SingletonManager.getInstance(AuthService);
