'use strict';

var sTime, eTime;

sTime = new Date().getTime();

function superEven(n) {

    var e = '',
        l = Math.log(n) / Math.log(5) | 0;

    while (l >= 0) {

        e += (n / Math.pow(5, l)).toString().split('.')[0] % 5 * 2;

        l--;
    }

    return e;
};

var n = 1009;

var res = superEven(n);

var sres = n.toString(5) * 2;

eTime = new Date().getTime();

console.log("第" + n + "项为:\n\r" + res + "\n\r" + sres + "\n\r用时:" + (eTime - sTime) + 'ms');