/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {
    if (right.length > left.length) {
        var buff = right;
        right = left;
        left = buff;
    }
    return left.filter(function (val) {
        return right.indexOf(val) > -1;
    })
}

console.log(intersection(
    [1, 2, 3, 4, 5],
    [2, 8, 3]
));
