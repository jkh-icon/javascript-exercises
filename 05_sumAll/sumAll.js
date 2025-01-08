const sumAll = function(a, b) {
    let x = 0;
    
    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    };

    if ((a < 0 || b < 0) || (!Number.isInteger(a) || !Number.isInteger(b))) {
        return 'ERROR';
    };

    for (let i = min; i <= max; i ++) {
        x += i;
    };

    return x;
};

// Do not edit below this line
module.exports = sumAll;
