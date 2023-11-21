//Arrays

// const arr = new Array(10);
const arr = [1,2,3,4];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

let arr2 = [...arr, 5];

const arr3 = arr2.map( num => num * 2);


 console.log(arr);
 console.log(arr2);
 console.log(arr3);
 