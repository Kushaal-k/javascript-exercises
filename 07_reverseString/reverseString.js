const reverseString = function(string) {
    let ans = "";

    for(let i = string.length;i>=0;i--)
    {
        ans+= string.charAt(i);
    }

    return ans;
};

// Do not edit below this line
module.exports = reverseString;
