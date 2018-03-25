/**
 * Найти пропущеное значение в неотсортированном массиве.
 * https://jsbin.com/kokajiz/edit?js,console,output
 * @param  {number[]} values
 * @return {number}
 */
function missing(values) {
    var total = 0, len = values.length;
    for (var i = 0; i < values.length; i++) {
        total += values[i];
    }

    if ((len+1)*len/2 - total < 0){
        return (len+2)*(len+1)/2 - total
    }

}



console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined