const path = require("path");
const express = require("express");
const xss = require("xss");
const CoinsService = require("./coins-service");

const coinsRouter = express.Router();
const jsonParser = express.json();

const sanitizeCoins = (coin) => ({
  ...coin,
  name: xss(coin.ticker_symbol),
});

coinsRouter
  .route("/coins")
  .get((req, res, next) => {
    CoinsService.getAllVotes(req.app.get("db"))
      .then((coin) => {
        res.json(coin.map(sanitizeCoins));
      })
      .catch(next);
  })

  .post(jsonParser, (req, res, next) => {
    const { ticker_symbol, up_votes, down_votes } = req.body;
    for (const [key, value] of Object.entries(
      ticker_symbol,
      up_votes,
      down_votes
    )) {
      if (value === null) {
        return res.status(400).json({
          error: { message: `Missing ${key} in request body` },
        });
      }
    }
    CoinsService.insertCoinDetails(
      req.app.get("db"),
      ticker_symbol,
      up_votes,
      down_votes
    )
      .then((coin) => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${coin.id}`));
        res.json(sanitizeCoins(coin));
      })
      .catch(next);
  });

coinsRouter
  .route(`/coins/:ticker_symbol`)
  .all((req, res, next) => {
    CoinsService.getVoteById(req.app.get("db"), req.params.ticker_symbol)
      .then((coin) => {
        if (!coin) {
          return res.status(404).json({
            error: { message: "Coin doesn't exist" },
          });
        }
        console.log(req.params);
        res.coin = coin;
        next();
      })
      .catch(next);
  })

  .get((req, res, next) => {
    res.json(sanitizeCoins(res.coin));
  })
  .delete((req, res, next) => {
    CoinsService.deleteVote(req.app.get("db"), req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = coinsRouter;
