//This problem is solved using Multiple Pointers pattern
function averagePair(arr, avgValue){
    if(arr.length===0)
        return false;

    let i=0;
    let j=arr.length-1;

    let newAvg = 0.0;
    while(i<j) {
        newAvg = (arr[i] + arr[j]) / 2;
        if(newAvg === avgValue)
            return true;
        else if(newAvg<avgValue)
            i++;
        else
            j--;
    }
    return false;
}

console.log(averagePair([1,2,3], 2.5)); //true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));    //true
console.log(averagePair([-1,0,3,4,5,6], 4.1));  //false
console.log(averagePair([], 4));    //false

// Time Complexity - O(n)
// Space Complexity - O(1)
