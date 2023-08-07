const changeImage=document.getElementById("cat");
const buttonPrevious=document.getElementById("btn1");
const buttonNext=document.getElementById("btn2");

function getPrevious () {
    changeImage.src="./assets/img/Cat1.jpg";
}
getPrevious();

function getNext () {
    changeImage.src="./assets/img/Cat2.jpg";
}
getNext();
