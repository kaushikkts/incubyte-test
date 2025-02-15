

const addStringNumbers = (stringNums) => {
    if (!stringNums) return 0;
    let delimiter = ',';
    if (stringNums.startsWith('//')) {
        // This means that we are changing the delimiter
        const delimiterEnd = stringNums.indexOf('\n');
        delimiter = stringNums.substring(2, delimiterEnd);
        stringNums = stringNums.substring(delimiterEnd + 1);

    }

    console.log(stringNums);
     return stringNums.split(delimiter).map(numStr => parseInt(numStr));

}

module.exports = addStringNumbers;


// addStringNumbers('//;\n1;2;3;4;5;6')