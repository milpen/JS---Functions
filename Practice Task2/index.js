let changeImage=document.getElementById("cat");
let buttonPrevious=document.getElementById("btn1");
let buttonNext=document.getElementById("btn2");

function getPrevious () {
    changeImage.src="./assets/img/Cat1.jpg";
}
getPrevious();

function getNext () {
    changeImage.src="./assets/img/Cat2.jpg";
}
getNext();
