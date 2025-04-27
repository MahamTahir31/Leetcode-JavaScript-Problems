var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 
    
    let prefix = "";
    let firstStr = strs[0];
    
    for (let i = 0; i < firstStr.length; i++) {
        let char = firstStr[i];
        
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        
        prefix += char;
    }
    
    return prefix;
};

const strs = ["flower","flow","flight"];
let res = longestCommonPrefix(strs);
console.log(res);
