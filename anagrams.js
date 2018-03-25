/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * https://jsbin.com/mimufo/edit?js,console,output
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    var obj = {},
        res = [],
        keys;

    for(var i = 0; i < list.length; i++){
        var sorted = list[i].toLowerCase().split('').sort().join('');

        if(!obj[sorted]) obj[sorted] = [];

        obj[sorted].push(list[i])
    }

    keys = Object.keys(obj);

    for(var k = 0; k < keys.length; k++) {
        if(obj[keys[k]].length > 1) res.push(obj[keys[k]])
    }

    return res;
}

const inputList = [
    'кот', 'пила', 'барокко',
    'стоп', 'ток', 'кошка',
    'липа', 'коробка', 'пост'
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]