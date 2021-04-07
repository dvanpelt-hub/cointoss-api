### Coin Toss - Cast your vote on trending cryptocurrencies!

Coin Toss is an app that provides users a list of the top seven trending cryptocurrencies on Coin Gecko. Data retrieved via the Coin Gecko API is displayed on each listed coins 'detail' page. After reading and analyzing this data, users can then cast their vote whether they believe the coin is worth purchasing.

### Landing Page

The landing page serves as a greeting and provides basic instruction for the application

Mobile View

![LandingPage - Mobile](https://user-images.githubusercontent.com/70976643/113894339-cf748600-97bf-11eb-96df-aadb74a90067.jpg)

Desktop View

![Landing Page - Desktop](https://user-images.githubusercontent.com/70976643/113894450-e915cd80-97bf-11eb-9f32-fc47910614e8.jpg)

### Trending Coins Page

The Trending Coins Page makes an API call to Coin Gecko and retrieves the current top seven trending cryptocurrencies

Mobile View

![Trending Coins - Mobile](https://user-images.githubusercontent.com/70976643/113894508-fa5eda00-97bf-11eb-8299-a5567bd1366f.jpg)

Desktop View

![Trending Coins - Desktop](https://user-images.githubusercontent.com/70976643/113894535-0185e800-97c0-11eb-99eb-6bb53f4b9e3e.jpg)

### Coin Details Page

The Coin Details Page displays all relevant market data, along with the votes from other users associated with the coin. As this page loads, an API call to the coin_details database is made which retrieves the votes. Users can 'Up Vote' or 'Down Vote' the coin and then 'Post' their votes, which updates the database accordingly.

Mobile View

![Coin Details - Mobile](https://user-images.githubusercontent.com/70976643/113894579-0e0a4080-97c0-11eb-9440-7d82276d9bad.jpg)

Desktop View

![Coin Details - Desktop](https://user-images.githubusercontent.com/70976643/113894608-15c9e500-97c0-11eb-8ec8-53981d839b4c.jpg)

### Technology used:

- JavaScript ES6
- CSS3
- HTML5
- React
- NodeJS
- PostgreSQL
- Express
- Knex
- Heroku

### Link to Coin Toss App:

https://cointoss-client.vercel.app/

### Summary:

The app displays trending cryptocurrencies and relevant market data while allowing users the option to 'up vote' or 'down vote' the coin.
