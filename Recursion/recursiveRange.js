function recursiveRange(num){
   if(num === 0) return 0;
   if(num === 1) return 1;
   return num + recursiveRange(num-1);
}


// SAMPLE INPUT/OUTPUT
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// Time Complexity - O(n)
// Space Complexity - O(1)