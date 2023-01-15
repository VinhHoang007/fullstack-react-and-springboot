export const oktaConfig = {
    clientId: '0oa7yrl720wbfsTKA5d7',
    issuer: 'https://dev-83591030.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
};