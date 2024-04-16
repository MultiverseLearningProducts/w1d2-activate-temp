const { guessedValue, guessedType } = require("../src/activity-04");

describe("guessedValue", function () {
	it("should be the right value", function () {
		expect(guessedValue).toEqual(398);
	});
});

describe("guessedType", function () {
	it("should be the correct value", function () {
		expect(guessedType).toEqual("string");
	});
});
