const CoinsService = {
  getAllVotes(knex) {
    return knex.select("*").from("coin_details");
  },
  insertCoinDetails(knex, ticker_symbol, up_votes, down_votes) {
    return knex("coin_details")
      .insert({
        ticker_symbol,
        up_votes,
        down_votes,
      })
      .onConflict("ticker_symbol")
      .merge({ up_votes: up_votes, down_votes: down_votes })
      .returning("*")
      .then((rows) => rows[0]);
  },
  getVoteById(knex, ticker_symbol) {
    return knex
      .from("coin_details")
      .select("*")
      .where("ticker_symbol", ticker_symbol)
      .first();
  },
  deleteVote(knex, id) {
    return knex("coin_details").where({ ticker_symbol }).delete();
  },
};

module.exports = CoinsService;
