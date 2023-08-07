const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let cat = document.getElementById("cat");

function getPrevious() {
    cat.src = 'https://topkin.ru/wp-content/uploads/2017/10/tomswallpapers.com-15649.jpg';
    btn1.style.background = "red";
    btn2.style.background = "white";
}

function getNext() {
    cat.src = "https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-55.jpg";
    btn2.style.background = "red";
    btn1.style.background = "white";
}