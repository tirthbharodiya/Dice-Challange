var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var setImages = "dice" + randomNumber1 + ".png";

var setImage1 = "images/" + setImages;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , setImage1);

//second Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var setImages2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",setImages2);                                                                                                                                                                                                                                                                                                                                                                                     

// Condition

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Yay player1 wins";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Ohh player 2 wins";
}

else{
  document.querySelector("h1").innerHTML = "match is draw"
}
