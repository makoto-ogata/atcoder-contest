// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ");
const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("");

const unique = input.filter((value, _, self) => {
	return self.indexOf(value) === self.lastIndexOf(value);
});

console.log(unique[0]);
