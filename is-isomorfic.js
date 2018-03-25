/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * https://jsbin.com/sivoheg/edit?js,console,output
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
    if (left.length !== right.length) return false;

    var lmap = [];
    var rmap = [];

    for(var i= 0; i < left.length; i++){

        var charLeft = left[i];
        var charRight = right[i];

        if (lmap.indexOf(charLeft) !== rmap.indexOf(charRight)) return false;

        if (lmap.indexOf(charLeft) < 0 && lmap.indexOf(charLeft) < 0) {
            lmap.push(charLeft);
            rmap.push(charRight)
        }

    }

    return true;
}

console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true
console.log('kick -> side:', isIsomorphic('kick', 'side')); // false