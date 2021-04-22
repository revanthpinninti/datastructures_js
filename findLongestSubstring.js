//This problem is solved using Sliding Window pattern
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

console.log(findLongestSubstring('abcbc'));  //3




console.log(findLongestSubstring(''));  //0
console.log(findLongestSubstring('rithmschool'));   //7
console.log(findLongestSubstring('thisisawesome')); //6
console.log(findLongestSubstring('thecatinthehat'));    //7
console.log(findLongestSubstring('bbbbbb'));    //1
console.log(findLongestSubstring('longestsubstring'));  //8
console.log(findLongestSubstring('thisishowwedoit'));   //6




"abcbc"     //3

length = 5

step1: check sliding window with length 5  - false
step2: check sliding window with length 4 from left to right - false
step3: check sliding window with length 4 from left to right - false
step4: check sliding window with length 3 from left to right - true
step4: check sliding window with length 3 from left to right - false
step4: check sliding window with length 3 from left to right - false