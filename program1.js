// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    let largest = -Infinity, secondLargest = -Infinity;
  
    for (let num of array) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest === -Infinity ? null : secondLargest;
}