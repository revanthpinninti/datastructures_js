function capitalizeFirst(arr) {
    if(arr.length === 0) return [];
    
    let str = arr[0]; 
    return [str[0].toUpperCase()+ str.substring(1)].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// Time Complexity - O(n)
// Space Complexity - O(1)