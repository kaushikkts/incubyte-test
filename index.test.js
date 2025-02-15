const addStringNumbers = require('./index');

describe('String calculator', () => {

    test('should handle single delimiter change', () => {
        expect(addStringNumbers('//;\n1;2')).toStrictEqual(3);
    });

    test('should throw Error on negative number', () => {
        expect(() => addStringNumbers('//;\n1;-2')).toThrow('Negative numbers not allowed: -2');
    });

    test('should throw Error on multiple negative numbers and display all of them', () => {
        expect(() => addStringNumbers('//;\n1;-2;-3;-4')).toThrow('Negative numbers not allowed: -2, -3, -4');
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

    test('should handle spaces', () => {
        expect(addStringNumbers('10000       ,  2334534,1003453450    ')).toBe(1005797984);
    });

    test('should handle empty string', () => {
        expect(addStringNumbers('')).toBe(0);
    });

    test('should handle single number', () => {
        expect(addStringNumbers('1')).toBe(1);
    });

    test('should handle numbers on multiple lines', () => {
        expect(addStringNumbers('15\n61\n30')).toBe(106);
    })

    test('should handle multiple numbers', () => {
        expect(addStringNumbers('15,61,30,37,10,53,88,83,66,17,58,18,35,41,96,75,95,83,99,54,76,27,37,36,88,31,74,45,96,77,20,56,100,36,89,3,51,10,89,34,2,55,31,91,16,33,80,83,80,47,58,91,78,52,9,23,47,80,60,21,93,66,49,89,95,12,23,16,9,61,26,3,22,82,70,36,18,64,17,100,91,16,77,70,30,76,5,51,46,77,16,72,74,44,17,73,29,51,36,57',
            )).toBe(5185);
    });

});