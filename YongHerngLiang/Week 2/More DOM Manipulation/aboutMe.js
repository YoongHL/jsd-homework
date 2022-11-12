//Change body style
document.body.style.fontFamily = "Arial, sans-serif"

//Replace Span
let spanTag = document.querySelectorAll("span");

//nickname
spanTag[0].innerHTML = "Yoong"
//favourites
spanTag[1].innerHTML = "Eating"
//hometown
spanTag[2].innerHTML = "K.L."

//Append Img
const image = document.createElement("img");
image.src = "https://pbs.twimg.com/profile_images/686585295450562561/RquLcsxM.jpg"
image.style.width = "200px";
image.style.height = "200px";
image.style.border = "1px solid black";

document.body.appendChild(image)