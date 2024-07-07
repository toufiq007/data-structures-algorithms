/**
 * Find the Largest Element of the array
 * given array: const array = [3,2,1,5,2]
 */
const array = [3, 2, 1, 5, 2];

// method ONE
// bruteforce solution
// most general solution
// not optimal solution
/**
 * step: 1 --> first sort the array
 * step: 2 --> then the last element should be the largest element of the array
 */

const sortedArray = array.sort((a, b) => a - b); // built in function should not be apply here.Must use any sorting algorithm like mergeSort,selectionSort
const largestElement = sortedArray[sortedArray.length - 1];
// console.log(largestElement);



// method two
/**
 * Take a variable store the first element as largest
 * then iterate the array and compare every element of this variable data
 * if the element is greater than variable then store it to the variable
 */
function findLargestElementFromArray(demoArray) {
  let largestElement = demoArray[0];
  for (let i = 0; i < demoArray.length; i++) {
    if (largestElement < demoArray[i]) {
      largestElement = demoArray[i];
    }
  }
  return largestElement;
}
console.log(findLargestElementFromArray(array));
