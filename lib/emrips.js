'use strict';

var sTime, eTime;

function isPrimeNumber(num) {

    if (num == 2 || num == 3) {
        return true;
    }

    if (num % 6 != 1 && num % 6 != 5) {
        return false;
    }

    for (var i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }

    return true;
}

function emirpNumber(num) {

    var reverseNumber = Number(String(num).split('').reverse().join(''));

    if (reverseNumber != num && isPrimeNumber(reverseNumber)) {
        return true;
    } else {
        return false;
    }
}

function findEmirp(n) {

    sTime = new Date().getTime();

    var emirpGroup = [];

    for (var i = 1; i < n; i++) {
        if (isPrimeNumber(i) && emirpNumber(i)) {
            emirpGroup.push(i);
        }
    }

    eTime = new Date().getTime();

    return ['n为：' + n, '数量为：' + emirpGroup.length, '最大数：' + emirpGroup[emirpGroup.length - 1], '求和：' + emirpGroup.reduce(function (total, current) {
        return total + current;
    })];
}

console.log(findEmirp(10000000));

console.log('用时:' + String(eTime - sTime) + 'ms');