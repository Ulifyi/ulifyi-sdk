// index.js
const OAuth2 = require('./OAuth2');
const User = require('./User');

class UlifyiSdk {
    constructor() {
        this._oauth2 = new OAuth2();
        this._user = new User();
        this.accessToken = null;
    }

    init(token) {
        this.accessToken = token;
    }

    getUserSelf() {
        try {
            if (!this.accessToken) {
                throw new Error("Access token not set. Please set the access token using the init method before calling this method.");
            }
            return this._user.getUserSelf(this.accessToken);
        } catch (error) {
            console.error(`Error in getUserSelf: ${error.message}`);
            throw error; // Re-throw the error for the calling code to handle if needed
        }
    }

    getUserById(userId) {
        try {
            if (!this.accessToken) {
                throw new Error("Access token not set. Please set the access token using the init method before calling this method.");
            }
            return this._user.getUserById(this.accessToken, userId);
        } catch (error) {
            console.error(`Error in getUserById: ${error.message}`);
            throw error; // Re-throw the error for the calling code to handle if needed
        }
    }

    generateUrl(clientId, redirectUri, scopes, responseType, state) {
        try {
            return this._oauth2.generateUrl(clientId, redirectUri, scopes, responseType, state);
        } catch (error) {
            console.error(`Error in generateUrl: ${error.message}`);
            throw error; // Re-throw the error for the calling code to handle if needed
        }
    }
}

module.exports = UlifyiSdk;
