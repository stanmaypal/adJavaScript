/*Array.prototype.copyWithin() method in JavaScript copies a sequence 
of array elements within the same array.

arr.copyWithin(target, start, end)

target: The index at which to copy the sequence to.
start (Optional): The index from which to start copying elements. If omitted, it defaults to 0.
end (Optional): The index before which to stop copying elements. If omitted, it defaults to arr.length.
*/ 

const arr5=['a','b','c','d','e'];
arr5.copyWithin(4,1,3)
console.log(arr5)