const [A, B, C, D] = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split(" ")
	.map(Number);

if ((A <= C && B <= D) || A > C) {
	console.log("No");
} else {
	console.log("Yes");
}
