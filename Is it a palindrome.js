/*
Write function isPalindrome that checks if a given string 
(case insensitive) is a palindrome.
*/ 

const isPalindrome = str => 
str.toLowerCase() === str.toLowerCase().split('').reverse().join('');