/*The Array.prototype.concat() method in JavaScript is used to merge two or more arrays.
 It doesn't modify the existing arrays but instead returns a new array
 containing the elements of the original arrays concatenated together. */

const arr1=[1,2,3,4]
const arr2=[5,6,7,8]
const arr3=[9,0,1,2]

const allArray=arr1.concat(arr2,arr3,arr1)
console.log(allArray)
