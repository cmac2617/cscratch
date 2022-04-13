var heightOffSetHeight;
var cStyle;
var mHeight;
var tHeight;
var main;
function getHeight() {
    heightOffSetHeight = document.getElementById("header").offsetHeight;
    cStyle = getComputedStyle(document.getElementById("header"));
    mHeight = parseInt(cStyle.marginTop);
    tHeight = heightOffSetHeight + mHeight;
}
getHeight();
console.log(heightOffSetHeight);
console.log(mHeight);
console.log(tHeight);

main = document.getElementById("main");
main.style.position = "absolute";
main.style.top = tHeight + "px";

var interestCardLeftHeight;
var interestCardRightHeight;
var interestCardRightHeading;
var interestCardSubCard;
var interestSubCardHeight;
var interestSubCard;

function photocollapse() {
    var el = document.getElementById("photos");
    if (el.style.display === "none" || el.style.display == "") {
        el.style.display = "block";
    }
    else {
        el.style.display = "none";
    }
}

function interestcollapse() {
    var el = document.getElementById("interests");
    if (el.style.display === "none" || el.style.display == "") {
        el.style.display = "block";
    }
    else {
        el.style.display = "none";
    }
}

function workcollapse() {
    var el = document.getElementById("work");
    if (el.style.display === "none" || el.style.display == "") {
        el.style.display = "block";
    }
    else {
        el.style.display = "none";
    }
}
var footerHeight;
var footerOffSetHeight;
var footerMargins;

// function getFooterHeight() {
//     footerOffSetHeight = document.getElementById("footer").offsetHeight;
//     footerMargins = document.getElementById("footer").style.marginTop + document.getElementById("footer").style.marginBottom;
//     footerHeight = footerOffSetHeight + footerMargins;
//     footerHeight = footerHeight + "px";
// }



// getFooterHeight();
// console.log(footerHeight);
// document.getElementById("workheader").style.marginBottom = footerHeight;


var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audioArray = [audio1, audio2, audio3, audio4];
var trackNumber = 0;
var trackNumberOld = 5;
var count = 0;

function track1 () {
    trackNumber = 0;
    console.log(trackNumber);
}
function track2 () {
    trackNumber = 1;
    console.log(trackNumber);
}
function track3 () {
    trackNumber = 2;
    console.log(trackNumber);
}
function track4 () {
    trackNumber = 3;
}

function playPause () {
for (i=0; i<4; i++) {
audioArray[i].pause();
}
console.log(trackNumber !== trackNumberOld);
if (count == 0 || trackNumber !== trackNumberOld) {
    count = 1;
    audioArray[trackNumber].play();
    trackNumberOld = trackNumber;
}
else {
    count = 0;

}
}

function stop () {
    audioArray[trackNumber].pause();
    count = 0;
audioArray[trackNumber].currentTime = 0;
}




