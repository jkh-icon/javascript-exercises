const palindromes = function (string) {

    const char = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const filteredString = string
    .toLowerCase()
    .split('')
    .filter((characters) => char.includes(characters))
    .join('');
    
    const reversedString = filteredString.split('').reverse().join('');

    return filteredString === reversedString;
};

//palindromes('hello world');

// Do not edit below this line
module.exports = palindromes;
