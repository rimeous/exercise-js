/**
 * Вывод чисел в колонках
 *
 * https://jsbin.com/lamuxux/edit?js,console,output
 *
 * @param   {Number}  max    от 0 до max
 * @param   {Number}  cols   количество колонок
 * @returns {String}
 */
var printNumbers = function (max, cols) {
    var string = '';
    var col_capacity = Math.ceil(max/cols);

    for (var i = 0; i < col_capacity; i++) {
        for (var c = 0; c < cols; c++){
            if (i + c*col_capacity >= max) break;
            string += ' ' + (i + c*col_capacity)
        }
        string += '\n'
    }
    return string;
};




console.log(printNumbers(12, 3));
/*
Пример работы:
0 4 8
1 5 9
2 6 10
3 7 11
*/
