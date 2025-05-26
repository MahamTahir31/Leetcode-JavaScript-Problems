var lengthOfLastWord = function(s) {
  // Trim the string to remove leading/trailing spaces
  s = s.trim();

  // Split the string by spaces into words
  const words = s.split(" ");

  // Get the last word and return its length
  return words[words.length - 1].length;
};

const s = 'Hello World';
const res = lengthOfLastWord(s);
console.log(res);