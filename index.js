
var randomNumber1 = Math.floor(Math.random()*6) + 1; // Math.floor(Math.random()*6) - random number between 0 to 5, + 1 to make this 1 to 6
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var images1 = "images/dice"+ randomNumber1 +".png"; //dice1.png - dice6.png
var images2 = "images/dice"+ randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src",images1); 
document.querySelector(".dice .img2").setAttribute("src",images2);

if (randomNumber1 === randomNumber2) {
document.querySelector(".container h1").innerHTML ="Draw";
} else if (randomNumber1 > randomNumber2) { 
document.querySelector(".container h1").innerHTML ="Player 1 wins";
} else if (randomNumber1 < randomNumber2) { 
document.querySelector(".container h1").innerHTML ="Player 2 wins";
}
