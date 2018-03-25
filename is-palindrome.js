/**
 * Является ли строка палиндромом
 *
 * https://jsbin.com/jereraw/edit?js,console,output
 *
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {

    value = value.toLowerCase().replace(/[\s]/g, '');

    var len = value.length;

    for (var i = 0; i <  Math.floor(len/2); i++) {
        if (value[i] !== value[len - 1 - i]) return false;
    }
    return true;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true
