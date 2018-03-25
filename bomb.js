// https://jsbin.com/qimeroc/edit?js,console,output
// Сейчас console выводит "undefined", нужно это исправить


function Bomb(message, delay) {
    this.message = message;
    // до добавления self и оборачивания вызова blowUp
    // функция blowUp вызывалась с областью видимостиобъекта window
    var self = this;
    setTimeout(function(){self.blowUp()}, delay * 1000); // взрываем через delay sec
}


Bomb.prototype.blowUp = function () {
    console.log(this.message);
};


new Bomb("Allahu akbar!", 1);
