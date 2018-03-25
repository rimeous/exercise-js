// https://jsbin.com/canase/edit?js,console,output

var sum = function () {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total;
};

console.log("result:", sum(1, 2, 3, 4, 5));
