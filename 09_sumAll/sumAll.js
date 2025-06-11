const sumAll = function(a, b) {
    if(a<0 || b<0 || !Number.isInteger(a) ||!Number.isInteger(b))
        return "ERROR";


    let sum =0;
    for(let i = (b>a ?  a : b);i<=(b>a ? b : a);i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
