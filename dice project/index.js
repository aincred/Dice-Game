// Get random numbers between 1 - 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Get random dice
var randomDice1 = "dice" + randomNumber1 + ".png";


// Get images source with random dice
var randomImageSource1 = "/images/" + randomDice1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
 
// Get random numbers between 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Get random dice
var  randomDice2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 =  "/images/" + randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if  (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").textContent= "Player 2 Wins!";
 }else{
     document.querySelector("h1").textContent= "It's a Draw!";
 }

