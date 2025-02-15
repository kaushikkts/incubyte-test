const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle single delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual(3);
    });

    test('should handle multi delimiter change', () => {
        expect(addStringNumbers('//--\n1--2')).toBe(3);
    });


});