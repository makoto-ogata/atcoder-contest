const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("");

const L = Math.floor(input.length / 2);
input.splice(L, 1);

console.log(input.join(""));
