const cors = require("cors");

const CLIENT_ORIGIN = {
  origin: [
    "http://localhost:8000",
    // "https://pocket-stocks-client.vercel.app/home",
    // "https://quiet-woodland-22837.herokuapp.com",
  ],
  optionsSuccessStatus: 200,
};

module.exports = cors(CLIENT_ORIGIN);
