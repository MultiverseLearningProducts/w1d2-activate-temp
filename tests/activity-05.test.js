const { expression, answer } = require("../src/activity-05");

test("answer contains correct data type", () => {
	expect(typeof answer).toEqual("string");
});

test("answer contains correct data type", () => {
	expect(answer).toEqual(expression);
});
