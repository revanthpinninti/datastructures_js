function stringifyNumbers(obj) {
    let result = {};
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        result[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        result[key] = stringifyNumbers(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));

// Time Complexity - O(n)
// Space Complexity - O(n)









/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/