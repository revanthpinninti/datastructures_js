//This problem is solved using Frequency Counter pattern
function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    
    let freqCount1 = {};
    let freqCount2 = {};

    if(str1.length !== str2.length)
        return false;

    for(let char1 of str1) {
      freqCount1[char1] = (freqCount1[char1] || 0) + 1;
    }
  
    for(let char2 of str2) {
      freqCount2[char2] = (freqCount2[char2] || 0) + 1;
    }
  
    for (let key in freqCount1) {
      if(!(key in freqCount2))
        return false;
        
      if(freqCount2[key] !== freqCount1[key])
        return false;
    }
   return true;
  }
  

  console.log(sameFrequency(182, 281)); //true
  console.log(sameFrequency(34, 14));   //false
  console.log(sameFrequency(3589578, 5879385)); //true
  console.log(sameFrequency(22, 222));  //false