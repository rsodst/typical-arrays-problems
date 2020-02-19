exports.min = function min(array) {
    return array && array.length > 0 ?
        array.reduce((min, cur) => {
            if (cur < min) {
                min = cur;
            }

            return min;
        }, array[0]) : 0;
};

exports.max = function max(array) {
    return array && array.length > 0 ?
        array.reduce((max, cur) => {
            if (cur > max) {
                max = cur;
            }

            return max;
        }, array[0]) : 0;
};

exports.avg = function avg(array) {
    return array && array.length > 0 ?
        array.reduce((sum, cur) => {
            sum += cur;
            return sum;
        }, 0) / array.length : 0;
};