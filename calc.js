// https://jsbin.com/pebihi/edit?js,console,output
function calc(input) {
    return eval(input.replace(/[^\d-+*.()]/g, ''));
}


// Проверка
console.log(calc('2 + 2')); // 4
console.log(calc('1 + 2 * 3')); // 7
