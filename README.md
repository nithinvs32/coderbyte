# Alphabet Tiles React App

This React app displays clickable tiles for each letter of the English alphabet. When a letter is clicked, it is appended to a string. If three consecutive identical letters are clicked, they are replaced with an underscore.

## How to Run

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the app.
4. Open your browser and visit `http://localhost:3000`.

---

# Array Challenge

## Problem Overview

The `ArrayChallenge` function solves the problem of detecting the point where an array of numbers stops increasing and starts decreasing (or vice versa). Given an array of integers, the function identifies the index where the sequence changes direction or returns `-1` if the array is strictly increasing or strictly decreasing.

### Example Inputs and Outputs:

- **Input:** `[5, 4, 3, 2, 10, 11]`  
  **Output:** `3`  
  *Explanation*: The sequence decreases up to index `3` (from 5, 4, 3, 2), then increases at index 4 (from 2 to 10).

- **Input:** `[-4, -2, 9, 10]`  
  **Output:** `-1`  
  *Explanation*: The sequence is strictly increasing, so there is no change in direction.

- **Input:** `[1, 2, 4, 6, 4, 3, 1]`  
  **Output:** `3`  
  *Explanation*: The sequence increases until index `3` (1, 2, 4, 6), then decreases after that.

- **Input:** `[10, 9, 7, 6, 2, 1]`  
  **Output:** `-1`  
  *Explanation*: The sequence is strictly decreasing, so there is no change in direction.

## Function Description

The function `ArrayChallenge(arr)` takes an array of integers `arr` as input and returns:
- The index at which the sequence stops increasing and starts decreasing, or vice versa.
- `-1` if the sequence is strictly increasing or strictly decreasing.

## Usage

### Example:

```javascript
console.log(ArrayChallenge([5, 4, 3, 2, 10, 11]));  // Output: 3
console.log(ArrayChallenge([-4, -2, 9, 10]));  // Output: -1
console.log(ArrayChallenge([1, 2, 4, 6, 4, 3, 1]));  // Output: 3
console.log(ArrayChallenge([10, 9, 7, 6, 2, 1]));  // Output: -1
