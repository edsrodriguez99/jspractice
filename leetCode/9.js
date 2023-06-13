let number = 123;
let carl = number.toString();
//Converted number to string;

var isPalindrome = function(x) {
    let stringy = x.toString();
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < stringy.length; i++) {
        arr1.push(stringy[i]);
    }
    for (let j = stringy.length - 1; j >= 0; j--) {
        arr2.push(stringy[j]);
    }

    //need to convert the stringed elements of the array to integers

    let intArray1 = arr1.map(str => parseInt(str));
    let intArray2 = arr2.map(str => parseInt(str));



    if (intArray1.some(element => Number.isNaN(element)) === true) {
        return false;
      } else {
        for (let i = 0; i < intArray1.length; i++) {
          if (intArray1[i] !== intArray2[i]) {
            return false;
          }
        }
        return true;
      }
    }
    console.log(isPalindrome(-121));
    console.log(isPalindrome(123));
    console.log(isPalindrome(9119));
