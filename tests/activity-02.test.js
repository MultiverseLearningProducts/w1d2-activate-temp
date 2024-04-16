const { mood } = require("../src/activity-02.js");
let { originalMood } = require("../src/activity-02.js");
const { bootcamp } = require("../src/activity-02.js");

describe("mood", function () {
	it("should be a string value", function () {
		expect(typeof mood).toEqual("string");
	});
});

describe("originalMood", function () {
	it("should be initialized with `happy`", function () {
		expect(originalMood).toEqual("happy");
	});
});

describe("mood", function () {
	it("should be able to be reassigned", function () {
		expect(mood).toEqual("sad");
	});
});

describe("bootcamp", function () {
	it("should be `Multiverse`", function () {
		expect(bootcamp).toEqual("Multiverse");
	});
});

describe("bootcamp", function () {
	it("should be a string value", function () {
		expect(typeof bootcamp).toEqual("string");
	});
});
