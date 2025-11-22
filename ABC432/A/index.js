const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split(" ")
	.map(Number);

const sortArray = input.sort((a, b) => (a > b ? -1 : 1));

console.log(sortArray.join(""));
