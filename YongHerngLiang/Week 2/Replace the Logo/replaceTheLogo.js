//Store the Logo in DOM traversal
let logo = document.querySelector(".lnXdpd");

//Save the current src
let currentSrc = logo.getAttribute("src");

//Modify source of Logo
let image = document.querySelectorAll("img")
let srcImage = image[1].src
image[1].src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
image[1].srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'

//Find Google Search button
let search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b");

//Modify the text
search.value = "Yahoooo!"