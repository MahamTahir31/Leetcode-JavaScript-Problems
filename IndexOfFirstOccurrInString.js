var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

let haystack = "leetcode leetcode";
let needle = "code";
let res = strStr(haystack, needle);
console.log(res);