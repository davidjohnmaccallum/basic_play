function quickSort(arr) {

  function partition(l, h) {
      let pivot = arr[l], i = l, j = h
      console.log(`partition(${l},${h}), pivot = ${pivot}`)
      // iterate until i passes j
      while(i < j) {
          // increment i until you find an element > pivot
          do { i++ } while(arr[i] <= pivot)
          // decrement j until you find an element <= pivot
          do { j-- } while(arr[j] > pivot)
          // swap the elements
          if (i < j) swap(arr, i, j)
      }
      // swap j and pivot            
      if (l !== j) swap(arr, l, j)
      //console.log(`partition() result: ${j}`)
      return j
  }

  function sort(l, h) {
      console.log(`sort(${l}, ${h}), arr = ${arr}`)
      // at least two elements
      if (l < h) {
          const j = partition(l, h)
          sort(l, j)
          sort(j+1, h)
      }
  }

  arr.push(10e+100)
  sort(0, arr.length-1)

}

function bubbleSort(arr) {

  console.log(`Bubble Sort, ${arr}`)

  // Edge cases
  if (arr.length < 2) return 0

  let sorted = false
  let passCount = 0

  // Loop control: 
  //   * Stop one short
  //   * Two loops: 
  //.     * An outer loop that keeps looping until the array is sorted.
  //.       We know that the array is sorted when the inner loop completes
  //.       without any swaps.
  //.     * An inner loop that does the swaps.
  while(!sorted) {
      let innerSwapCount = 0
      for (let i=0; i<arr.length-1; i++) {
          console.log(arr)
          const a = arr[i]
          const b = arr[i+1]
          if (a > b) {
              console.log(`swap(${i}, ${i+1})`)
              swap(arr, i, i+1)
              innerSwapCount++
          }
      }
      if (innerSwapCount === 0) sorted = true
      passCount++
  }

  console.log(`Passes ${passCount}`)

}

// Swap array elements at indexes i and j
function swap(arr, i, j) {
  console.log(`swap(${arr}, ${i}, ${j}), count = ${swapCount}`)
  const a = arr[i]
  const b = arr[j]
  arr[i] = b
  arr[j] = a    
  swapCount++
}