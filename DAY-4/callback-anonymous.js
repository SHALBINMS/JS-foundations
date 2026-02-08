const applyOperation = (n, cb) => cb(n);

const x = applyOperation(2, (n) => 3 * n);

console.log(x);
