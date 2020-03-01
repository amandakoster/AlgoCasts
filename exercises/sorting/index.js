// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let bigger = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = bigger;
//             }
//         }
//     }
//     return arr;
// };

// function bubbleSort(arr) {
//     for (let ii = 0; ii < arr.length - 1; ii++) {
//         for (let jj = ii + 1; jj < arr.length; jj++) {
//             if (arr[jj] < arr[ii]) {
//                 let tmp = arr[ii];
//                 arr[ii] = arr[jj];
//                 arr[jj] = tmp;
//             }
//         }
//     }
//     return arr;
// }

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    }
    return arr;
}


function selectionSort(arr) {
for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
return arr;
}




function mergeSort(arr) {
  if(arr.length === 1) { return arr; }

  const middle = Math.floor(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right));

}


function merge(left, right) {
  let results = []

  while(left.length && right.length){

    if(left[0] < right[0]){
      results.push(left.shift())
    } else { 
      results.push(right.shift()) 
    }

  }
  console.log([...left])
  return [...results, ...left, ...right]
}



module.exports = { bubbleSort, selectionSort, mergeSort, merge };
