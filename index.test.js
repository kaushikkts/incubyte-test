const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual([1,2]);
    });
});