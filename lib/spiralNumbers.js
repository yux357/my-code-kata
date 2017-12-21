"use strict";

function splitNumbers(n, m) {
    /*将总数按照每一层拆分为N个数组*/

    var arr = [];

    if (n == 1) {

        arr[0] = 1 + m;
    } else {

        for (var i = 0; i < 4 * n - 4; i++) {

            arr[i] = i + 1 + m;
        }
    }

    return arr;
}

function spiralNumbers(n) {

    var layerArray = [];

    var spiralArray = [];

    var totalLayers = n;

    var count = 0;

    var m = 0;

    while (n > 0) {

        layerArray[count] = splitNumbers(n, m);

        n = n - 2;

        m = layerArray[count][layerArray[count].length - 1];

        count++;
    }

    for (var i = 0; i < totalLayers; i++) {
        /*组装成漏斗数组*/

        var index = i >= layerArray.length ? totalLayers - i - 1 : i;

        var cloneArray = layerArray[index].concat();

        if (i < totalLayers / 2) {

            spiralArray[i] = cloneArray.splice(0, totalLayers - index * 2);
        } else {

            spiralArray[i] = cloneArray.splice(2 * (totalLayers - 2 * i) - 2, totalLayers - index * 2);

            spiralArray[i] = spiralArray[i].reverse();
        }
    }

    for (var i = 0; i < spiralArray.length; i++) {
        /*填充漏斗*/

        var index = i >= layerArray.length ? totalLayers - i - 1 : i;

        for (var j = 0; j < index; j++) {

            var cloneArray = layerArray[j].concat();

            spiralArray[i].splice(j, 0, cloneArray[cloneArray.length - i + j]);

            spiralArray[i].splice(spiralArray[i].length - j, 0, cloneArray[totalLayers - 2 * j + i - j - 1]);
        }
    }

    return spiralArray;
}