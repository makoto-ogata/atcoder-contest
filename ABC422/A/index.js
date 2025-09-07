// const input = require("fs").readFileSync("/dev/stdin", "utf8");
const input = require("fs").readFileSync("./sample.txt", "utf8");
const raw = input.trim().split("-");
let parent = Number(raw[0]);
let child = Number(raw[1]);

if (parent === 8 && child === 8) {
	console.log(raw);
} else if (child === 8) {
	parent++;
	child = 1;
	console.log(parent + "-" + child);
} else if (child <= 7) {
	child++;
	console.log(parent + "-" + child);
}
