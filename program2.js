// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    let freq = new Array(26).fill(0);
    
    for (let char of string) {
      let index = char.charCodeAt(0) - 97;
      if (index >= 0 && index < 26) {
        freq[index]++;
      }
    }
    
    let result = {};
    for (let i = 0; i < 26; i++) {
      if (freq[i] > 0) {
        result[String.fromCharCode(i + 97)] = freq[i]; //will convert each string char into ascii value + 97 and then convert it to char and object will be created
      }
    }
  
    return result;
}