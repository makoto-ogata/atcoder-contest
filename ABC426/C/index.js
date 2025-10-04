const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("\n");
const [N, Q] = input[0].split(" ").map(Number);
const queries = input.slice(1).map((line) => line.split(" ").map(Number));

const ver = new Map();
for (let i = 1; i <= N; i++) ver.set(i, 1);

const results = [];
for (const [X, Y] of queries) {
	let cnt = 0;
	for (let v = 1; v <= X; v++) {
		if (ver.has(v)) {
			cnt += ver.get(v);
			ver.delete(v);
		}
	}
	ver.set(Y, (ver.get(Y) || 0) + cnt);
	results.push(cnt);
}

console.log(results.join("\n"));
