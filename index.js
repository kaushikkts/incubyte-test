

const addStringNumbers = (stringNums) => {
    if (!stringNums) return 0;
    let delimiter = /[,\n]+/;
    if (stringNums.startsWith('//')) {
        // This means that we are changing the delimiter
        const delimiterEnd = stringNums.indexOf('\n');
        // because the startsWith has 2 characters, we need to start the substring
        // at character 3 which is (2) as it is 0 indexed
        delimiter = stringNums.substring(2, delimiterEnd);
        stringNums = stringNums.substring(delimiterEnd + 1);

    }

    const numbers = stringNums.split(delimiter).map(numStr => parseInt(numStr.trim(), 10));
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