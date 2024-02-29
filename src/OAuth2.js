
class OAuth2 {
    constructor() {

    }

    generateUrl(clientId, redirectUri, scopes, responseType, state) {

        const BASE_URL = "https://auth.uli.fyi/auth/identify/authorize";

        // Check if the parameters are valid
        if (!clientId || !redirectUri || !scopes || !responseType || !state) {
            throw new Error("Invalid parameters (clientId, redirectUri, scopes, responseType, state)");
        }

        // Generate the URL
        const url = new URL(BASE_URL);
        url.searchParams.append("client_id", clientId);
        url.searchParams.append("redirect_uri", redirectUri);
        url.searchParams.append("scopes", scopes);
        url.searchParams.append("response_type", responseType);
        url.searchParams.append("state", state);

        return url.href;

    }

}

module.exports = OAuth2;