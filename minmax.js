const sort = (arr) => {
  let low;
  let high;
  let count = 0;

  //cycle through each element in arr
  arr.forEach((ele) => {
    //first ele of arr
    if (count === 0) {
      //set value for comparison
      low = ele;
      high = ele;
    } else {
      //current value is less than low var (replace)
      if (ele < low) {
        low = ele;
      }
      //current value is greater than high var (replace)
      if (ele > high) {
        high = ele;
      }
    }
    //tracks current ele cycle
    count++;
  });
  //return value
  return [low, high];
};

//test cases
const arr = [14, 15, 5, 7, 10, 5, 3, 9, 1, 10];
const arr2 = [50, -100, 0, 100, 50];
console.log(sort([6, 12, -5, 12, 58, 41]));
console.log(sort(arr));
console.log(sort(arr2));
