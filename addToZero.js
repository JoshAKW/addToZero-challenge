// Starting array
let array = [-4, 43, -12, 30, 4, 0, 12]

// Write your solution below:


function addNumbers(arr) {
    

    for (let i = 0; i < arr.length; i++) {
        let comp = arr[i+1]
        if (arr[i] + comp === 0) {
            return true
        } else {
            console.log(arr[i] + comp)
            
        }
    }
    return false
}

console.log(addNumbers(array))