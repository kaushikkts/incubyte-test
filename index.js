

const addStringNumbers = (stringNums) => {
    if (!stringNums) return 0;
    let delimiter = /[,\n]+/;
    if (stringNums.startsWith('//')) {
        // This means that we are changing the delimiter
        const delimiterEnd = stringNums.indexOf('\n');
        delimiter = stringNums.substring(2, delimiterEnd);
        stringNums = stringNums.substring(delimiterEnd + 1);

    }

    const numbers = stringNums.split(delimiter).map(numStr => parseInt(numStr.trim(), 10));
    console.log(numbers);
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



addStringNumbers('1\n2\n3')