//This problem is solved using Multiple Pointers pattern
function isSubsequence(str1, str2) {
    let i=0;
    let j=0;

    if(str1.length === 0)
        return true;

    while(j<str2.length) {
        if(str1[i] === str2[j])
            i++;

        if(i===str1.length)
            return true;
        
        j++;
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting'));    //true
console.log(isSubsequence('abc', 'abracadabra'));   //true
console.log(isSubsequence('abc', 'acb'));   //false (order matters)