//This problem is solved by using Sliding Window Pattern
function maxSubarraySum(arr, len){
    "use strict"
    if(arr.length < len)
        return null;
    
    let maxSum=0, tempSum=0;
    for(let i=0;i<len;i++)
        maxSum += arr[i];
    
    tempSum=maxSum;
    for(let j=len; j<= arr.length; j++) {
        tempSum = tempSum - arr[j-len] + arr[j];

        maxSum = tempSum>maxSum ? tempSum : maxSum;
    }

    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));  //700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); //39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));   //5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2));    //5
console.log(maxSubarraySum([2,3], 3));  //null


// Time Complexity - O(n)
// Space Complexity - O(1)
