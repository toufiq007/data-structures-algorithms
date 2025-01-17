/**
 * Basic sorting with bubble sort
 */

/**
 given array: const array = [3,2,1,5,2]
 * step:1 --> compare two adjacent element
 * step:2 --> if position is not correct then swap to them
 * step:3 --> if we have n items in array. pass will need n-1 times
 * step:4 --> two loops should be required. one takes the number of pass and remaining one  takes the number of comparion of two adjucent items
 * */

// implement bubble sort
const myArr = [10, 3, 2, 50, 1, 8, 7];
function bubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

/**
 * improve bubble sort
 * remove unnessary comparison for sorting this array with bubble sort
 * step:1: in inner loop when we continue the loop j < array.length then unnsessary comparision occurs
 * step:2: for remove this we must reduce our comparison j < array.length - i
 * because after every pass the most largest element place at the correct position so no need to compare this with the previous element
 */
function improveBubbleSort(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    // this is for number of pass
    for (let j = 0; j < array.length - i; j++) {
      // this is for number of comparision
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
//console.log(bubbleSort(myArr));

/**
 * optimized bubble sort
 * it is then used when our array is almost sorted
 * it is the most improve version of bubble sort
 */

function improveBubbleSort(array) {
  let temp;
  let flag = 0;
  for (let i = 0; i < array.length; i++) {
    // this is for number of pass
    for (let j = 0; j < array.length - i; j++) {
      // this is for number of comparision
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        flag++;
      }
    }
    if (flag === 0) {
      break;
    }
  }
  return array;
}

console.log(improveBubbleSort(myArr));
