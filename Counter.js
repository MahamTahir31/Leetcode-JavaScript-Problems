var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

let num = 5
let counter = createCounter(num)
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7