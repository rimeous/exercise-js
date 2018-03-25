/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
function sort(values) {
    return values.sort(function (a, b) { return a-b; })
}

console.log(sort([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]
