const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("\n");

const [N, M] = input[0].split(" ").map(Number);
const S = input.slice(1);
const result = new Set();

for (let i = 0; i <= N - M; i++) {
	for (let j = 0; j <= N - M; j++) {
		let pattern = [];
		for (let k = 0; k < M; k++) {
			const subRow = S[i + k].substring(j, j + M);
			pattern.push(subRow);
		}

		const string = pattern.join("\n");
		result.add(string);
	}
}

console.log(result);
