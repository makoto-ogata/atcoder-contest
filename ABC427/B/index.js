const input = require("fs").readFileSync("./sample.txt", "utf8").trim();

const N = Number(input);

function f(x) {
	return x
		.toString()
		.split("")
		.reduce((sum, digit) => sum + parseInt(digit), 0);
}

const A = new Array(N + 1);
A[0] = 1;
for (let i = 1; i <= N; i++) {
	let sum = 0;
	for (let j = 0; j < i; j++) {
		sum += f(A[j]);
	}
	A[i] = sum;
}

console.log(A[N]);
