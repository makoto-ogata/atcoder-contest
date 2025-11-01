const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
const line = input[1].trim().split(" ").map(Number);

const sum = line.reduce((a, c) => {
	return a + c;
}, 0);

for (let i = 0; i < N; i++) {
	const calc = sum - line[i];
	if (calc === M) {
		return console.log("Yes");
	}
}

console.log("No");
