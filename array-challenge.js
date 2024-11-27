function ArrayChallenge(arr) {

  let varOcg = -1;  
  let isIncreasing = arr[0] < arr[1];

  for (let i = 0; i < arr.length - 1; i++) {
    if (isIncreasing) {
      if (arr[i] > arr[i + 1]) {
        varOcg = i;
        break;
      }
    } else {
      if (arr[i] < arr[i + 1]) {
        varOcg = i;
        break;
      }
    }
  }

  return varOcg;
}

console.log(ArrayChallenge([5, 4, 3, 2, 10, 11]));  
console.log(ArrayChallenge([-4, -2, 9, 10]));  
console.log(ArrayChallenge([1, 2, 4, 6, 4, 3, 1]));  
console.log(ArrayChallenge([10, 9, 7, 6, 2, 1]));
