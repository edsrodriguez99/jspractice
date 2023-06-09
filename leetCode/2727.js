let obj = {"x": 5, "y": 42};
let arr = []



var isEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
        return true
    }
    else if (Object.keys(obj).length !== 0) {
        return false
    }
}

console.log(isEmpty(obj));
console.log(isEmpty(arr));
