// arrays

// creating a array
const myArr = [0,1,2,3,4,5]

// array-copy operation creates a shallow copies.
// Shallow copy - they are a copy whose properties share the same reference (point to the same underlying values)
// meaning if any changes happens on the copy, it will change the original array aswell, since they both are pointing to the same refrence.

// Deep copy - properties do not share the same references (point to the same underlying values)
// meaning if any changes happens on the copy, it will not change the original array, since they both are pointing to the different refrence.

// const myHeros =  ["Shaktiman", "naagraj"]
// console.log(myHeros[1]);

// Array methods

// myArr.push(6) // pushes 6 into the myArr (last position)
// console.log(myArr);

// myArr.pop() : pops the last value in the array

// myArr.unshift(9) : appends the value at the start - can be very time consuming
// myArr.shift() : removes the first values 

// Slice : myArr.slice(1,3) = [1,2]  , myArr = [0,1,2,3,4,5] - still the same
// - slice gives a copy of the values without modifying the original array {slice(starting point from 1, n-1)}

// splice : myArr.splice(1,3) = [1,2,3],    myArr = [0,4,5] - changed
// - splice gives the values from  modifying the original array

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr[1]);