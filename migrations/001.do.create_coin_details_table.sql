CREATE TABLE coin_details (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  ticker_symbol VARCHAR(10) NOT NULL UNIQUE,
  up_votes NUMERIC NOT NULL,
  down_votes NUMERIC NOT NULL
);


