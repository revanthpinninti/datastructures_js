function capitalizeWords(arr) {
    if(arr.length === 0) return [];
    
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

 let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// Time Complexity - O(n)
// Space Complexity - O(1)