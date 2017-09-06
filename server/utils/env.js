require('dotenv').config();

const env = {
  PORT: process.env.PORT,
  API_HOST: process.env.API_HOST,
  API_PORT: process.env.API_PORT,
  API_PROTOCOL: process.env.API_PROTOCOL
}

module.exports = env;
