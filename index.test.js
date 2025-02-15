const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle single delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual(3);
    });

    test('should throw Error on negative number', () => {
        expect(() => addStringNumbers('//;\n1;-2')).toThrow('Negative numbers not allowed: -2');
        // expect(addStringNumbers('//;\n1;-2')).toThrow('Negative numbers not allowed: -2');
    });

    test('should throw Error on multiple negative numbers and display all of them', () => {
        expect(() => addStringNumbers('//;\n1;-2;-3;-4')).toThrow('Negative numbers not allowed: -2, -3, -4');
        // expect(addStringNumbers('//;\n1;-2')).toThrow('Negative numbers not allowed: -2');
    });

    test('should handle multi delimiter change', () => {
        expect(addStringNumbers('//--\n1--2')).toBe(3);
    });

    test('should be NaN if numbers not passed', () => {
        expect(addStringNumbers('//--\n1--2--3--A')).toBe(NaN);
    });

    test('should handle large numbers', () => {
        expect(addStringNumbers('10000,2334534,1003453450')).toBe(1005797984);
    });

    test('should handle empty string', () => {
        expect(addStringNumbers('')).toBe(0);
    });

    test('should handle single number', () => {
        expect(addStringNumbers('1')).toBe(1);
    });


});