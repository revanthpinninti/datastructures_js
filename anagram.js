function validAnagram(str1, str2){
  
  if(str1.length !== str2.length)
    return false;
    
  let freqCount1 = {};
  let freqCount2 = {};
  
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

console.log(validAnagram('revanth', 'revanthh'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('tele', 'elete'));
