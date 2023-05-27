const { stringLength, reverseString,capitalize } = require('./index');

describe("TESTS FOR STRING LENGTH", () => {
    test('Should return length of the string "hello" of 5', () => {
        expect(stringLength("hello")).toBe(5);
    });

    test('should throw an error if called with an empty string', () => {
        expect(() => stringLength("")).toThrow('String should not be empty or exceeded max length = 10');
    })

    test('should throw an error if max string length = 10 is exceeded', () => {
        expect(() => stringLength("This string has exceeded max length")).toThrow('String should not be empty or exceeded max length = 10');
    })
});

describe("TESTS REVERSE STRING", () => {
    test('The string "hello" should be reversed as "olleh"', () => {
        expect(reverseString("hello")).toEqual("olleh")
    })
})

describe("TESTS CAPITALIZE STRING", () => {
    test('The string "hello" should be capitalized as "Hello"', () => {
        expect(capitalize("hello")).toEqual("Hello")
    })
})
