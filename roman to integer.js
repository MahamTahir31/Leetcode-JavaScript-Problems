var romanToInt = function(s) {
    const romanNumerals = {
        "I": 1,
        "V": 5, 
        "X": 10, 
        "L": 50, 
        "C": 100, 
        "D": 500, 
        "M": 1000
    }
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let current = romanNumerals[s[i]];
        // console.log("current: " + current);
        let next = romanNumerals[s[i + 1]];
        // console.log("next: " + next);
    
        if (next > current) {
            total += (next - current); // Handle subtraction case
            i++; // Skip the next character since it's already processed
        } else {
            total += current;
        }
    }    
    return total;
    
};

console.log(romanToInt("III"));
console.log(romanToInt("XL"));
console.log(romanToInt("XX"));
