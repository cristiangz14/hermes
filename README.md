# Hermes Client
Auth0 internal tool that allows the Auth0 Engineers to create tickets in Zendesk on behalf of a customer.

### Auth0 Account
The Auth implemented this project is based on [SPA + API guide](https://auth0.com/docs/architecture-scenarios/application/spa-api). In order to config the Auth account follow the guide and make sure a SPA Client and API is created.


## Installation
```bash
$ npm install
```

## Config ENV variables
Create a .env file at the root of the project set the variables.
``` bash
AUTH_DOMAIN='{domain}.auth0.com'
AUTH_AUDIENCE={api_identifier}
AUTH_CLIENT_ID={cliente_id}
AUTH_CALLBACK_URL='http://localhost:3000/callback'
API_HOST=localhost
API_PORT=3001
API_PROTOCOL=http
PORT=3000
```
* **AUTH_DOMAIN** : Auth0 account domain.
* **AUTH_AUDIENCE**: API identifier. It allows the end-users authenticate againts the API.
* **AUTH_CLIENT_ID**: Auth0 client id.
* **AUTH_CALLBACK_URL**: URL which Auth0 will redirect after login successfully.
* **API_HOST**: API host. API endpoint which the SPA will call to create tickets. See [API project](https://github.com/cristiangz14/hermes_api)
* **API_PORT**: API port.
* **API_PROTOCOL**: API protocol. http or https.
* **PORT**: Port where the SPA project will run.

## Devlopment
Run the command to start the project in development env.
```bash
$ npm run dev
```

## Production
Run the command to start the project in production env.
```bash
$ npm start
```
