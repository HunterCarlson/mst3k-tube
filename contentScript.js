var imgPath = chrome.runtime.getURL("mst3k_overlay.svg");
var img = document.createElement("img");
img.src = imgPath;
img.id = "mst3k"

console.log(imgPath);

// var header = document.getElementsByClassName("entry-header")[0];
// header.appendChild(img);

var video = document.getElementById("movie_player");
video.appendChild(img);