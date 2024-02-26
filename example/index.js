
const Ulifyi = require('../src/index');

const client = new Ulifyi();

const clientId = 'YOUR_CLIENT_ID';
const redirectUri = 'YOUR_REDIRECT_URI';
const scopes = 'user user:email';
const responseType = 'code';
const state = '123456';
const token = "YOUR_ACCESS_TOKEN";

const url = client.generateUrl(clientId, redirectUri, scopes, responseType, state);

console.log(url.href);

client.getUserSelf(token).then((user) => {
    console.log(user);
}).catch((err) => {
    console.error(err);
});
