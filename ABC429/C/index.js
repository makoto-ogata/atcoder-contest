const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("\n");

const N = Number(input[0]);
const A = input[1].trim().split(" ").map(Number);
let cnt = Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
	cnt[A[i]]++;
}

console.log(cnt);

let ans = 0;
for (let i = 1; i <= N; i++) {
	if (cnt[i] < 2) continue;
	let c = (cnt[i] * (cnt[i] - 1)) / 2;
	ans += c * (N - cnt[i]);
}

// Output
console.log(ans);
