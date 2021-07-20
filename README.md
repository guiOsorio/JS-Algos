# JS-Algos

This small project consists of some algorithms written to complete FreeCodeCamp's curriculum, as well as some sorting algorithms. I decided to include them all in a webpage.
These simple algorithms are written in JS.

https://guiosorio.github.io/JS-Algos/

## Algorithm's description:
#### Caesar's Chiper
  - This algorithm takes a string from the user and converts it to its encrypted version using the famous Caesar's Cipher. The key used to move each character is 13, so each encrypted character is 13 characters away of its corresponding unencrypted character.
#### Palindrome Checker
  - This algorithm takes a string from the user and checks if the string is a palindrome, that is, if the reversed string is the same as the original string.
#### Roman Numeral Converter
  - This algorithm converts any standard number into a roman numeral.
#### Telephone Number Validator
  - This algorithm checks if the user's input is a valid telephone number or not.
#### Cash Register
  - Although I couldn't get this to work using a user's input, this algorithm determines the most efficient change to give, depending on the type of coins/bills in the cash-in-drawer, the price of an item, and the money received.
#### Bubble sort
  - Works by comparing the values in an array from left to right. After each iteration throught the array, the right-most element will be sorted, that is, the last index in the previously unsorted array will have its highest value (it will be in its right position).
  - For every index in the array, the element in it will be compared with the element to the right of it, and swapped if larger. Therefore, the sorting will end once no swaps are made in a full iteration.
  - Time complexity:
    - Worst/Average case: O(n^2).
    - Best case: O(n).
##### Insertion sort
  - Works by iteratin over an array and comparing the current element to its predecessor. If the current element is smaller, keep comparing it to its predecessors. Once a predecessor is greater, swap the current element to its right position.
  - Time complexity:
    - Worst/Average case: O(n^2).
    - Best case: O(n).
#### Selection sort
  - Works by finding the element with the lowest value in the unsorted array and moving it to the left-most index of the array. Therefore, after one iteration of the loop, one more element of the array will be sorted.
  - Time complexity:
    - Worst/Average case: O(n^2).
    - Best case: O(n^2).
#### Merge sort
  - Uses a divide-and-conquer strategy to efficiently sort an array recursively. It works by dividing the array into smaller sub-arrays, sorting those small sub-arrays first, and then returning to sort the original array. 
  - Time complexity:
    - All  cases: O(nlogn).

## Technologies used / Skills gained:
- HTML/CSS/JS;
- Algorithmic practice;
