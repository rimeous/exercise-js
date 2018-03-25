// https://jsbin.com/rakazuv/edit?html,js,console,output
// Реализовать подсчет кликов, максимум до 3-х включительно
// обработчик должен сниматься


document.getElementById('counter').addEventListener("click", clickCounter)

function clickCounter(e){
    var btn = e.target,
        count = parseInt(/(\d)/g.exec(e.target.innerHTML)[0]);

    ++count;

    btn.innerHTML = btn.innerHTML.replace(/(\d)/g, count);

    if(count === 3) removeClickCounter(btn)
}

function removeClickCounter(btn) {
    btn.removeEventListener("click", clickCounter)
}
