var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in map) {
            let topElement = stack.length > 0 ? stack.pop() : '#';
            if (topElement != map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    if(stack.length == 0){
        return true;
    }else{
        return false;
    }
};

let s = "()[]{}";
let res = isValid(s);
console.log(res);