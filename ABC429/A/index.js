const [N, M] = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split(" ")
	.map(Number);

for (let i = 1; i <= N; i++) {
	if (i <= M) {
		console.log("OK");
	} else {
		console.log("Too Many Requests");
	}
}
