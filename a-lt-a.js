// https://jsbin.com/jasapac/edit?js,console,output
// Возможно ли реализовать такое?

var a;
a = {
    i: 1,
    toString: function () {
        return a.i++;
    }
};

// Проверка
console.log(a == a); // true
console.log(a < a); // true
