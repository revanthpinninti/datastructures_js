// Method -1
function collectStrings(obj) {
    var result = [];
 
    function helper(newObj) {
        for(let key in newObj) {
            if(typeof newObj[key] === 'string') {
                result.push(newObj[key]);
            }
            else if(typeof newObj[key] === 'object') {
                return helper(newObj[key]);
            }
        }
    }
 
    helper(obj);
 
    return result;
}

// Method -2 
function collectStrings(obj) {
    let result = [];
    
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            result.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            result = result.concat(collectStrings(obj[key]));
        }
    }

    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])


// Time Complexity - O(n)
// Space Complexity - O(n)