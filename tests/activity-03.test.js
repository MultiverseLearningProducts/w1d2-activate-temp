const { myUndefined, codingTime, isCodingFun } = require("../src/activity-03");

it("is undefined", () => {
	expect(myUndefined).toEqual(undefined);
});

it("is a string", () => {
	expect(typeof codingTime).toEqual("string");
});

it("contains `Anytime`", () => {
	expect(codingTime).toEqual("Anytime");
});

it("is a boolean", () => {
	expect(typeof isCodingFun).toEqual("boolean");
});

it("contains `true`", () => {
	expect(isCodingFun).toEqual(true);
});
