/**
 * Получения массива уникальных значений
 *
 * https://jsbin.com/vifafev/edit?js,console,output
 *
 * @param  {number[]} values
 * @return {*}
 */
function uniq(values) {
    var arr = [];

    for(var i = 0; i < values.length; i++){
        if (arr.indexOf(values[i]) === -1) arr.push(values[i]);
    }

    return arr;
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));