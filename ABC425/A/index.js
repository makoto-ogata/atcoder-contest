const input = require("fs").readFileSync("./sample.txt", "utf8").trim();
const x = Number(input);
let result;
let array_box = [];

for (let i = 1; i <= x; i++) {
	if (i % 2 === 0) {
		result = i ** 3 * 1;
		array_box.push(result);
	} else {
		result = i ** 3 * -1;
		array_box.push(result);
	}
}

let total = array_box.reduce((sum, element) => sum + element, 0);

console.log(total);
