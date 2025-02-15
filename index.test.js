const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle single delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual([1,2]);
    });

    test('should handle multi delimiter change', () => {
        expect(addStringNumbers('//;;;;\n1;;;;2')).toStrictEqual([1,2]);
    });
});