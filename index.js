

const addStringNumbers = (stringNums) => {
    if (!stringNums) return 0;
    let delimiter = ',';
    if (stringNums.startsWith('//')) {
        // This means that we are changing the delimiter
        const delimiterEnd = stringNums.indexOf('\n');
        delimiter = stringNums.substring(2, delimiterEnd);
        stringNums = stringNums.substring(delimiterEnd + 1);

    }

    const numbers = stringNums.split(delimiter).map(numStr => parseInt(numStr));
    let sum = 0;
    let negativeNumbers = [];
    numbers.forEach(num => {
        if (num < 0) {
            negativeNumbers.push(num);
        } else {
            sum += num;
        }
    });

    if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
    return sum;

}

module.exports = addStringNumbers;


// addStringNumbers('//;\n1;2;3;4;5;6')