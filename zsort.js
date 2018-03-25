/**
 * Перенос нулей в конец массива
 *
 * https://jsbin.com/caleqew/edit?js,console,output
 *
 * @param  {number[]} input
 * @return {number[]}
 */
function zsort(input) {
    return input.sort(function(a,b){
        return (a*b) === 0 ? b-a : a-b;
    })

}


// Проверка
console.log(zsort([1, 0, 2, 3, 0, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]

