const input = require("fs").readFileSync("./sample.txt", "utf8");
const [X, C] = input.trim().split(" ").map(Number);

const k = Math.floor(X / (1000 + C));
const maxWithdraw = k * 1000;

console.log(maxWithdraw);
