const knex = require("knex");
const supertest = require("supertest");
const App = require("../src/App");

describe("Coins postings endpoint", () => {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    App.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean table", () => db("coin_details").truncate());

  afterEach("cleanup", () => db("coin_details").truncate());

  context("Given there are coins in the table", () => {
    const testCoins = [
      {
        id: 10001,
        ticker_symbol: "ABC",
        up_votes: 100,
        down_votes: 200,
      },
      {
        id: 10002,
        ticker_symbol: "DEF",
        up_votes: 200,
        down_votes: 300,
      },
      {
        id: 10003,
        ticker_symbol: "GHI",
        up_votes: 500,
        down_votes: 200,
      },
    ];
    beforeEach("insert coins", () => {
      return db.into("coin_details").insert(testCoins);
    });
    it("GET all coins via endpoint: /api/v1/coins, response with 200", () => {
      return supertest(App).get("/api/v1/coins").expect(200);
    });
    it("GET coin by ticker_symbol", () => {
      const ticker_symbol = "ABC";
      return supertest(App).get(`/api/v1/coins/${ticker_symbol}`).expect(200);
    });
    describe(`POST /api/v1/coins`, () => {
      it("POSTs a new vote for the specified coin and receives a status of 201", function () {
        return supertest(App)
          .post("/api/v1/coins")
          .send({
            ticker_symbol: "ABC",
            up_votes: 100,
            down_votes: 99,
          })
          .expect(201);
      });
    });
  });
});
