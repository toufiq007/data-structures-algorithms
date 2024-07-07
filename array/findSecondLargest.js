/**
 * Find the Second largest Element of the array
 * given array: const array = [1,2,3,4,7,7,5]
 */
const array = [1, 2, 3, 4, 7, 7, 5];

// method ONE
// bruteforce solution
// most general solution
// not optimal solution

/**
 * step: 1 --> sort the array
 * step: 2 --> then find the largest and then compare every element of the array
 */

const sortedArray = array.sort((a, b) => a - b); // built in function should not be apply here.Must use any sorting algorithm like mergeSort,selectionSort

// function findSecondLargestElement(array) {
//   const largest = array[array.length - 1];
//   let secondLargest;
//   for (i = array.length - 2; i > 0; i--) {
//     if (largest > array[i]) {
//       secondLargest = array[i];
//       break;
//     }
//   }
//   return secondLargest;
// }

// console.log(findSecondLargestElement(sortedArray));

/**
 * BETTER SOLUTION
 * step: 1 --> first find the largest element
 * step: 2: --> takes a variable secondLargest and put it value -1
 * step: 3: --> then compare to both of this
 */

function findLargest(array) {
  const largest = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  return largest;
}
function secondLargest(array, largest) {
  let secondLargest = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}
const largest = findLargest(array);
// console.log(secondLargest(array, largest));

/**
 * OPTIMAL SOLUTION
 */
// const array = [1, 2, 3, 4, 7, 7, 5];
const fSecondLargest = (array) => {
  let largest = array[0];
  let secondLargest = -1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
      secondLargest = largest;
    }
  }
  return secondLargest;
};
console.log(fSecondLargest(array));
