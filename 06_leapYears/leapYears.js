const leapYears = function(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        answer = true;
    } else {
        answer = false;
    }
    return answer
};
console.log(leapYears(1900))
// Do not edit below this line
module.exports = leapYears;
