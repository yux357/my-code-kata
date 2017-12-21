var taxMap = [
    {
        "tax": 2200
    },
    {
        "tax": 2500,
        "taxRate":0.18
    },
    {
        "tax": 3000,
        "taxRate":0.2
    },
    {
        "tax": 5000,
        "taxRate":0.25
    },
    {
        "tax": 8000,
        "taxRate":0.3
    },
    {
        "tax": 12000,
        "taxRate":0.35
    },
    {
        "tax": 22000,
        "taxRate":0.4
    },
    {
        "tax": 30000,
        "taxRate":0.5
    },
    {
        "tax": 50000,
        "taxRate":0.6
    },
    {
        "tax": 100000,
        "taxRate":0.7
    },
];

function getTax(salary){

    var salaryArea,totalTax = 0;

    var taxArr = taxMap.map(function(v,k){

        return v.tax;
    });

    taxArr.push(salary);

    taxArr.sort(function(a,b){

        return a - b;
    })

    salaryArea = taxArr.indexOf(salary) > taxMap.length - 1 ? taxMap.length - 1 : taxArr.indexOf(salary);

    for(var i=1;i<=salaryArea;i++){

        var prevTax = taxMap[i-1].tax;

        if(i == salaryArea){

            totalTax += (salary - prevTax) * taxMap[i].taxRate;

            break;
        }

        totalTax += (taxMap[i].tax - prevTax) * taxMap[i].taxRate;

    }

    return "薪资：" + salary + "\r\n" + "所得税：" + totalTax + "\r\n" + "平均税率：" + (totalTax/salary);
}

console.log(getTax(12300));