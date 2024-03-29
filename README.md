<div align="center">

# Ulifyi SDK

[![npm version](https://img.shields.io/npm/v/ulifyi-sdk.svg)](https://www.npmjs.com/package/ulifyi-sdk)
[![npm downloads](https://img.shields.io/npm/dm/ulifyi-sdk.svg)](https://www.npmjs.com/package/ulifyi-sdk)
[![GitHub license](https://img.shields.io/github/license/Ulifyi/ulifyi-sdk)](https://github.com/Ulifyi/ulifyi-sdk/blob/main/LICENSE)

Ulifyi SDK is a JavaScript library that provides a convenient interface for interacting with the Ulifyi API. It allows you to easily integrate Ulifyi authentication and user data retrieval into your applications.

## Features

- Authenticate users with Ulifyi using OAuth2.
- Retrieve user data, including self-information and information about other users.

## Installation

```bash
npm install ulifyi-sdk
````
</div>

## Usage

### Initialize the SDK

```javascript
const UlifyiSdk = require('ulifyi-sdk');

const ulifyi = new UlifyiSdk();
ulifyi.init('YOUR_ACCESS_TOKEN');
```

## Examples

### Get Self Information

```javascript
try {
    const selfUserData = await ulifyi.getUserSelf();
    console.log('Self User Data:', selfUserData);
} catch (error) {
    console.error('Error fetching self user data:', error.message);
}
```

### Get User Information by ID

```javascript
const userId = 'TARGET_USER_ID';

try {
    const targetUserData = await ulifyi.getUserById(userId);
    console.log(`User Data for User ID ${userId}:`, targetUserData);
} catch (error) {
    console.error(`Error fetching user data for User ID ${userId}:`, error.message);
}
```

### Generate OAuth2 URL

```javascript
const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'YOUR_REDIRECT_URI';
const scopes = 'openid profile email'; // Example scopes
const responseType = 'code';
const state = 'YOUR_STATE';

try {
    const authorizationUrl = ulifyi.generateUrl(clientId, redirectUri, scopes, responseType, state);
    console.log('OAuth2 Authorization URL:', authorizationUrl);
} catch (error) {
    console.error('Error generating OAuth2 authorization URL:', error.message);
}
```

## API Reference
- `init(accessToken: string)`: Initializes the SDK with the provided access token.
- `getUserSelf(): Promise<UserData>`: Retrieves the user's self information.
- `getUserById(userId: string): Promise<UserData>`: Retrieves user information by user ID.
- `generateUrl(clientId: string, redirectUri: string, scopes: string, responseType: string, state: string): string`: Generates an OAuth2 authorization URL.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Ulifyi/ulifyi-sdk/tree/main?tab=MIT-1-ov-file#readme) file for details.