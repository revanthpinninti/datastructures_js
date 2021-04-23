//Method - 1
function flatten(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    } 
    return result;
}

// Method - 2 
function flatten(arr) {
    return arr.flat(Infinity);
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]



// Time Complexity - O(n)
// Space Complexity - O(n)