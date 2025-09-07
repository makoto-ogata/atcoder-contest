// const input = require("fs").readFileSync("/dev/stdin", "utf8");
const input = require("fs").readFileSync("./sample.txt", "utf8");
const raw = input.trim().split("\n");

const [column, row] = raw[0].split(" ").map(Number);
const S = raw.slice(1);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

for (let i = 0; i < column; i++) {
	for (let j = 0; j < row; j++) {
		if (S[i][j] === ".") {
			continue;
		}

		let count = 0;
		for (let d = 0; d < 4; d++) {
			const ni = i + dx[d];
			const nj = j + dy[d];
			if (ni >= 0 && ni < column && nj >= 0 && nj < row) {
				if (S[ni][nj] === "#") {
					count++;
				}
			}
		}

		if (count !== 2 && count !== 4) {
			console.log("No");
			return;
		}
	}
}

console.log("Yes");
