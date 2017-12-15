function C(n,m){

    var arr = [];

    for(var i=0;i<4*n-4;i++){

        arr[i] = i + 1 + m;
    }
    return arr;
}

function twoDArr(n,m){

    var arr = [];

    var x = 0;

    var alen = n;

    while(n > 0){

        arr[x] = C(n,m);

        n = n - 2;

        m = arr[x][arr[x].length - 1]

        x++;

    }

    var nArr = [];

    var lArr = [];

    for(var i=0;i<alen;i++){

        var index = i >= arr.length ? alen - i - 1 : i;

        var cloneArr = arr[index].concat();

        if(i < alen / 2){

            nArr[i] = cloneArr.splice(0,alen - index * 2);
        }
        else{

            nArr[i] = cloneArr.splice(2 * (alen - 2 * i) - 2,alen - index * 2);

            nArr[i] = nArr[i].reverse();
        }

        lArr[i] = nArr[i].concat();

    }

    console.log(nArr)

    for(var i=0;i<nArr.length;i++){

        var index = i >= arr.length ? alen - i - 1 : i;

        var cloneArr = arr[index].concat();

        for(var j=0;j<index;j++){

            console.log(cloneArr)

            nArr[index].splice(j,0,cloneArr[cloneArr.length - i]);

            nArr[index].splice(nArr[index].length - j,0,cloneArr[alen - i - 1]);

        }
    }

    return nArr;
}


console.log(twoDArr(8,0))