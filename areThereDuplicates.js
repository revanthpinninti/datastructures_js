//This solution is using Frequency counter pattern
function areThereDuplicates(...arr) {
    let obj={};
   
   for(let key of arr) {
      if(key in obj)
        return true;
    
      obj[key] = 1;
   }
   return false;
  }


  //This solution is using Multiple pointers pattern
  function areThereDuplicates(...arr) {
    arr.sort();

    let i=0;
    let j=1;

    while(j<arr.length) {
        if(arr[i] === arr[j]) {
            return true;
        }
        i++;
        j++;
    }
   
   return false;
  }

  console.log(areThereDuplicates(1,2,3));   //false
  console.log(areThereDuplicates(1,2,2));   //true
  console.log(areThereDuplicates('a','b','c','a'));   //true