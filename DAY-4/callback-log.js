const executeTask = (n, cb) => cb(n);

const processor = (n) => {
  console.log("Processing number: " + n);
  return n * n;
};

const x = executeTask(10, processor);
console.log(x);
