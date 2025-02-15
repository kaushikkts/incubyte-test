const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle single delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual(3);
    });

    test('should throw Error on negative number', () => {
        expect(() => addStringNumbers('//;\n1;-2')).toThrow('Negative numbers not allowed: -2');
        // expect(addStringNumbers('//;\n1;-2')).toThrow('Negative numbers not allowed: -2');
    });

    test('should handle multi delimiter change', () => {
        expect(addStringNumbers('//--\n1--2')).toBe(3);
    });

    test('should be NaN if numbers not passed', () => {
        expect(addStringNumbers('//--\n1--2--3--A')).toBe(NaN);
    });


});