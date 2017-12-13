function add(a, b) { /*输入两个字符串类型大数字*/

    if(a.indexOf('-') >= 0 && b.indexOf('-') < 0){

        return minus(b,a);
    }
    else if(a.indexOf('-') < 0 && b.indexOf('-') >= 0){

        return minus(a,b);
    }

    var sign = "";

    if(a.indexOf('-') >= 0 && b.indexOf('-') >= 0){ /*两个负数相加，指定符号*/

        sign = "-";

        a = a.substr(1);

        b = b.substr(1);
    }

    var aArr = a.replace(/^0+/,'').split('').reverse();

    var bArr = b.replace(/^0+/,'').split('').reverse(); /*利用倒序数组存储*/

    var carry = 0; /*进位值*/

    var sumArr = [];

    var len = Math.max(aArr.length, bArr.length); /*取得位数较大的一个数的位数*/

    for(var i=0;i<=len-1;i++){

        var digA = parseInt(aArr[i]) ? parseInt(aArr[i]) : 0;

        var digB = parseInt(bArr[i]) ? parseInt(bArr[i]) : 0;

        var digTotal = digA + digB + carry;

        if(i == len-1){/*排除'012' + '012'这样的情况*/

            if(digTotal > 0){

                sumArr.unshift(digTotal);
            }

            break;
        }

        carry = Number(digTotal >= 10);

        digTotal = digTotal % 10;

        sumArr.unshift(digTotal);

    }

    return sign + sumArr.join('');
}

function compare(a,b){

    var sign = 1;

    if(a.indexOf('-') >= 0 && b.indexOf('-') < 0){ /*异符号比较*/

        return -1;
    }
    else if(a.indexOf('-') < 0 && b.indexOf('-') >= 0){ /*异符号比较*/

        return 1;
    }
    else if(a.indexOf('-') >= 0 && b.indexOf('-') >= 0){ /*同为负数，指定取反，同时改为正数比较方式*/

        sign = -1;

        a = a.substr(1);

        b = b.substr(1);
    }

    a = a.replace(/^0+/,'');

    b = b.replace(/^0+/,'');

    var flag;

    if(a.length < b.length){    /*比较长度*/

        flag = -1;
    }
    else if(a.length > b.length){

        flag = 1;
    }
    else{

        flag = 0;
    }

    if(flag == 0){ /*相同长度逐位比较*/

        var aArr = a.split('');

        var bArr = b.split('');

        for(var i=0;i<=aArr.length;i++){

            if(aArr[i] > bArr[i]){

                flag = 1;

                break;
            }
            else if(aArr[i] > bArr[i]){

                flag = -1;

                break;
            }
        }
    }

    return sign * flag;
}

function minus(a, b) {

    if(a.indexOf('-') >= 0 && b.indexOf('-') < 0){

        return add(a,"-" + b);
    }
    else if(a.indexOf('-') < 0 && b.indexOf('-') >= 0){

        a = a.substr(1);

        return add(a,b);
    }

    var sign = "";

    if(compare(a,b) < 0){

        var temp = b;

        b = a;

        a = temp;

        sign = "-";
    }

    var aArr = a.replace(/^0+/,'').split('').reverse();

    var bArr = b.replace(/^0+/,'').split('').reverse(); /*利用倒序数组存储*/

    var borrow = 0; /*借位值*/

    var minusArr = [];

    var len = Math.max(aArr.length, bArr.length); /*取得位数较大的一个数的位数*/

    for(var i=0;i<=len-1;i++){

        var digA = parseInt(aArr[i]) ? parseInt(aArr[i]) : 0;

        var digB = parseInt(bArr[i]) ? parseInt(bArr[i]) : 0;

        var digMinus;

        if(i == len-1){

            if(digA - borrow <= digB){ /*最高位不够减直接跳出循环*/

                break;
            }
        }

        if(digA - digB - borrow >= 0){

            digMinus = digA - digB - borrow;

        }else{

            digMinus = digA + 10 - digB - borrow;

            borrow = 1;
        }

        minusArr.unshift(digMinus);

    }

    return sign + minusArr.join('');
}

function multiplicative(a, b) { /*输入两个字符串类型大数字*/

    var sign = '';

    if(a.indexOf('-') >= 0 && b.indexOf('-') < 0){

        sign = '-';

        a = a.substr(1);
    }
    else if(a.indexOf('-') < 0 && b.indexOf('-') >= 0){

        sign = '-';

        b = b.substr(1);
    }

    if(a.indexOf('-') >= 0 && b.indexOf('-') >= 0){ /*两个负数相加，指定符号*/

        a = a.substr(1);

        b = b.substr(1);
    }

    var aArr = a.replace(/^0+/,'').split('').reverse();

    var bArr = b.replace(/^0+/,'').split('').reverse(); /*利用倒序数组存储*/

    var mult = "0";

    for(var i=0;i<aArr.length;i++){

        var digA = parseInt(aArr[i]) ? parseInt(aArr[i]) : 0;

        for(var j=0;j<bArr.length;j++){

            var zero = '';

            for(var k=0;k<i+j;k++){

                zero += '0';
            }

            var digB = parseInt(bArr[j]) ? parseInt(bArr[j]) : 0;

            mult = add(mult,(digA * digB).toString() + zero);
        }
    }

    return sign + mult;
}

var a = "162352323";

var b = "-1523523535";

console.log(a * b)

var sTime = new Date().getTime();

console.log(multiplicative(a,b));

var eTime = new Date().getTime();

console.log("用时:" + (eTime - sTime).toString() + "ms");