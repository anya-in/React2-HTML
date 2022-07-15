const _ = require('lodash');
const numbers = [3, 4, 8, 6, 9];
_.each(numbers, function (number, i) {
    console.log(number);
});