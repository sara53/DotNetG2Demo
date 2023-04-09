/**
 *  == btn1.onclick = changeStyle;
    == btn1.onclick = changeContent;
 */

// var btn1 = document.getElementById("btn1");
// var div = document.getElementById("content1");

// function changeContent(e) {
//   console.log(e);

//   div.innerHTML = "Hello Dot Net Group";
// }

// btn1.addEventListener("click", function () {
//   console.log("fggg");
// });

// btn1.onclick = changeContent;
// function changeStyle() {
//   div.style.backgroundColor = "red";
// }
// btn1.addEventListener("click", changeStyle);

// setTimeout(function () {
//   console.log("Done");
//   btn1.removeEventListener("click", changeContent);
// }, 2000);
/**==================== */

//   1- add attribute on element
//   2- attach function on element // js engine call
//    3- add event Listener // js engine

// var input1 = document.getElementById("input1");
// var result = document.getElementById("result");
// input1.addEventListener("focus", function () {
//   input1.style.border = "2px solid blue";
// });
// input1.addEventListener("input", function (e) {
//   if (input1.value.length >= 3) {
//     input1.style.border = "2px solid green";
//     result.style.display = "none";
//   } else {
//     input1.style.border = "2px solid red";
//     result.style.display = "block";
//   }
// });
// input1.addEventListener("blur", function () {
//   input1.style.border = "2px solid orange";
// });

// function login(e) {
//   e.preventDefault();
//   console.log(input1.value);
// }

// function first() {
//   console.log("first");
// }
// function second(e) {
//   e.stopPropagation();

//   console.log("second");
// }
// function third(e) {
//   e.stopPropagation();
//   console.log("third");
// }
