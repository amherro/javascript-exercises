const sumAll = function(first, last) {
    let finalSum = 0;
    if (first < 0 || last < 0 || typeof first != 'number' || typeof last != 'number') {
        return 'ERROR'
    } else if (last < first) {
        for (i = last; i <= first; i++) {
            finalSum += i;
        }
    } else if (first < last) {
        for (i = first; i <= last; i++) {
            finalSum += i;
        };
    };
    return finalSum; 
};



module.exports = sumAll;
