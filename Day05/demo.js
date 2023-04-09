/**
 * DOM
 * -----
 * BOM --> Browser Object Model
 *  ==window
 *  == screen (self study)
 *  == history
 *  == naviagator (self study)
 *  == location
 */

// alert("warning");

// window.alert("warning");

// window.prompt()
// prompt()
// var myWin;
// function openNewWindow() {
//   // open()
//   myWin = window.open("about.html", "", "width=200,height=200");
// }
// function closeWindow() {
//   myWin.close();
// }
// function moveToWindow() {
//   myWin.moveTo(300, 300);
// }
// function moveByWindow() {
//   myWin.moveBy(-100, -100);
// }
// function resizeToWindow() {
//   myWin.resizeTo(300, 300);
// }
// function resizeByWindow() {
//   myWin.resizeBy(100, 100);
// }

/**
 * setTimeOut
 * setInterval
 */

// setTimeout(function () {
//   window.open("about.html");
// }, 2000);

// var result = document.getElementById("result");
// var myInterval;
// function start() {
//   var i = 0;
//   myInterval = setInterval(function () {
//     result.innerHTML = i++;
//   }, 1000);
// }
// function stop() {
//   clearInterval(myInterval);
// }
// var showMessage = document.getElementById("result");
// function startDownload() {
//   showMessage.style.display = "block";
//   setTimeout(function () {
//     showMessage.innerHTML = "<a> www.google.com </a>";
//   }, 3000);
// }

/**  */
// function getLocation() {
//   //   location.href = "https://www.google.com.eg/";
//   //   console.log(location.pathname); // get
//   //   location.pathname = "/about.html";
//   //   location.reload();
//   // location.assign("https://www.google.com.eg/");
//   // location.replace("https://www.google.com.eg/");
// }

// navigator.geolocation.getCurrentPosition(success, refused);

// function success(position) {}
// function refused() {}
