const taxedPrices = prices.map(
  price => Math.round(price + price * 0.1)
);
