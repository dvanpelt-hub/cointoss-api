const cors = require("cors");

const CLIENT_ORIGIN = {
  origin: [
    "http://localhost:8000",
    "http://localhost:3000/details/",
    "https://calm-taiga-71106.herokuapp.com/api/v1/coins",
    "https://cointoss-client-dvanpelt-hub.vercel.app",
    "https://cointoss-client.vercel.app",
  ],
  optionsSuccessStatus: 200,
};

module.exports = cors(CLIENT_ORIGIN);
