const arr = [1,2,3]

/**
 * Iterating over an array. Using i as the 
 * pointer to the current element of the 
 * array. Moving through the array from
 * beginning to end.
 * 
 * Loop control: Stop the loop as soon
 * as pointer goes past the end of the 
 * array. Because the pointer is zero
 * based but the length is one based
 * we use pointer<length instead of 
 * pointer<length+1.
 * 
 * [0 1 2 3]
 * [      ↓]
 * [1 2 3  ]
 */
console.log('Beginning to end (zero based pointer)')
for (let i=0; i<arr.length; i++) {
  console.log(arr[i])
}

/**
 * As above but using a 1 based pointer variable.
 * 
 * Loop control: Because both pointer and length
 * are one based we use pointer<length+1.
 * 
 * [1 2 3 4]
 * [      ↓]
 * [1 2 3  ]
 */
console.log('Beginning to end (one based pointer)')
for (let i=1; i<arr.length+1; i++) {
  console.log(arr[i-1])
}

console.log('End to beginning (zero based pointer)')
for (let i=arr.length-1; i>-1; i--) {
  console.log(arr[i])
}

console.log('End to beginning (one based pointer)')
for (let i=arr.length; i>0; i--) {
  console.log(arr[i-1])
}
