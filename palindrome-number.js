var isPalindrome = function(x) {
    // convert x from int to str
    let str = x.toString();

    // reversing array 
    let reversedStr = str.split('').reverse();

    // compare if original and reversed strings are same
    if (str === reversedStr.join('')){
        return true; // is palindrome
    }else{
        return false; // not palindrome
    }
};