/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and
the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    if(input === null || input.length < 1 ) {
         return [];
 }
     let positiveNum = input.filter(item => item > 0).length;
     let negativeNumber = input.filter(item => item < 0).reduce((a,b) => a + b,0);
     return [positiveNum, negativeNumber];
}