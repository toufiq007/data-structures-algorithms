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

// console.log(bubbleSort(myArr));
