const passer = (n, cb) => cb(n);

const oddOrEven = (n) => (n % 2 === 0 ? "Even" : "Odd");

const x = passer(10, oddOrEven);
