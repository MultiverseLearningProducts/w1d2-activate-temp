let { originalNum, numVar, stringVar, answer2 } = require("../src/activity-01");

describe("numVar is a variable", () => {
	test("should be a number", () => {
		expect(originalNum).toBeDefined();
		expect(typeof originalNum).toBe("number");
	});

	test("numVar should be assigned the number 22", () => {
		expect(originalNum).toBe(22);
	});

	test("numVar can be reassigned", () => {
		expect(numVar).toEqual(123123124);
	});

	test("should be `Hello World`", () => {
		expect(typeof stringVar).toEqual("string");
		expect(stringVar).toEqual("Hello World");
	});
});

describe("answer2 variable", () => {
	test("contains correct data type as a string", () => {
		expect(answer2).toEqual("boolean");
	});
});
