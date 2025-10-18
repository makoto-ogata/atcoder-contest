// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ");
const [S, A, B, X] = require("fs")
	.readFileSync(0, "utf8")
	.trim()
	.split(" ")
	.map(Number);

let base = Math.floor(X / (A + B)) * S * A;
let mod = Math.min(X % (A + B), A) * S;

console.log(base + mod);
