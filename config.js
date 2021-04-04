// .env exporter
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  apiEndpoint: process.env.DISCORD_API_ENDPOINT,
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  test: process.env.DISCORD_BUILD_A_BOT_TEST_TOKEN,
  token: process.env.DISCORD_BUILD_A_BOT_TOKEN,
  port: process.env.PORT
};
