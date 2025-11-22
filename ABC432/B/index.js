const input = require("fs")
	.readFileSync("./sample.txt", "utf8")
	.trim()
	.split("")
	.map(Number);

const sortArray = input.sort((a, b) => (a < b ? -1 : 1));

if (sortArray[0] === 0 && sortArray.length > 1) {
	for (let i = 1; i < sortArray.length; i++) {
		if (sortArray[i] > 0) {
			const temp = sortArray[0];
			sortArray[0] = sortArray[i];
			sortArray[i] = temp;
			break;
		}
	}
}

console.log(sortArray.join(""));
