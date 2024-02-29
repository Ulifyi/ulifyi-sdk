
const Ulifyi = require('../src/index');

const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'YOUR_REDIRECT_URI';
const scopes = 'user user:email';
const responseType = 'code';
const state = '123456';
const token = 'YOUR_USER_TOKEN';

// Create a new instance of the Ulifyi SDK
const client = new Ulifyi(token);
client.init(token); // Set the user token

// Generate the URL for the user to authenticate
const url = client.generateUrl(clientId, redirectUri, scopes, responseType, state);
console.log(url); // Print the URL

// Get the user data of the authenticated user (the user token is set in the init method)
client.getUserSelf().then((user) => {
    console.log(user); // Print the user data
}).catch((err) => {
    console.error(err);
});

// Get the user data of a specific user
const userId = "B80243319598880800"; // Example user ID (@ulifyi) - replace with the user ID you want

client.getUserById(userId).then((user) => {
    console.log(user); // Print the user data
}).catch((err) => {
    console.error(err);
});
