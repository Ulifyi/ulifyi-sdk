// index.js
const OAuth2 = require('./OAuth2');
const User = require('./User');

class UlifyiSdk {
    constructor() {
        this._oauth2 = new OAuth2(); // Change the property name
        this._user = new User(); // Change the property name
    }

    getUserSelf(accessToken) {
        return this._user.getUserSelf(accessToken);
    }
    generateUrl(clientId, redirectUri, scopes, responseType, state) {
        return this._oauth2.generateUrl(clientId, redirectUri, scopes, responseType, state);
    }


}

module.exports = UlifyiSdk;
