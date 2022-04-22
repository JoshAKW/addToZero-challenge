// Starting array
let array = [2, 43, -12, 30, 4, 0, 13]

// Write your solution below:


function addNumbers(arr) {  
   for (let j = 0; j <= arr.length; j++) {
    for (let i = 0; i <= arr.length; i++) {
            if (j !== i) {
                if (arr[j] + arr[i] === 0) {
                    return true
            }
        } 
    }
   } 
    return false
}

console.log(addNumbers(array))
