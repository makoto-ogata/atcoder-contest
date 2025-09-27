const input = require("fs").readFileSync("./sample.txt", "utf8");
const raw = input.trim().split("\n");
const N = Number(raw[0]);
const A = raw[1].split(" ").map(Number);
const P = new Array(N).fill(0);
const used = new Set();

for (let i = 0; i < N; i++) {
	if (A[i] !== -1) {
		if (used.has(A[i])) {
			console.log("No");
			return;
		}
		P[i] = A[i];
		used.add(A[i]);
	}
}

const unused = [];
for (let i = 1; i <= N; i++) {
	if (!used.has(i)) {
		unused.push(i);
	}
}

for (let i = 0; i < N; i++) {
	if (P[i] === 0) {
		P[i] = unused.pop();
	}
}
console.log("Yes");
console.log(P.join(" "));
