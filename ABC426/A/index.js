// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split(" ");
const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split(" ");

if (
	input[0] === input[1] ||
	(input[0] === "Lynx" && input[1] === "Serval") ||
	(input[0] === "Serval" && input[1] === "Ocelot") ||
	(input[0] === "Lynx" && input[1] === "Ocelot")
) {
	console.log("Yes");
} else {
	console.log("No");
}
