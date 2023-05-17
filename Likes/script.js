var likeButton = document.querySelector("#like-button-one");
var likeButton = document.querySelector("#like-button-two");
var likeButton = document.querySelector("#like-button-three");

var likeAmountOne = document.querySelector("#like-amount-one");
var likeAmountOne = document.querySelector("#like-amount-two");
var likeAmountOne = document.querySelector("#like-amount-three");

var likes = [9,12,9]

function increaseLikesOne() {
    likes[0]+=1
    document.getElementById("like-amount-one").innerText = likes[0];
}

function increaseLikesTwo() {
    likes[1]+=1
    document.getElementById("like-amount-two").innerText = likes[1];
}

function increaseLikesThree() {
    likes[2]+=1
    document.getElementById("like-amount-three").innerText = likes[2];
}