/**Dom
 * ----
 * Document Object Model
 * ---------------------------
 * Events
 *  ------
 * Select Element on JS
 * -------------------------
 *
 *  == getElementById ==> returnelement
 *  == querySelector ==> returnelement
 *  == getElementsByClassName --> collection
 *  == getElementsByTagName --> collection
 *  == getElementsByName --> collection
 *  == querySelectorAll --> collection
 * --------------------------------------
 *
 * document.body
 * document.links
 * document.images
 * document.forms
 * -----------------------
 *  == firstChild
 *  == firstElementChild
 *  == lastChild
 *  == lastElementChild
 * -------------------------
 *  == children
 *  == childNodes
 *
 */
// var div = document.getElementById("section2");
// console.log(div.children);
// console.log(div.childNodes);
/**
 * changeContent
 * ---------------
 *  == innerText
 *  == innerHTML
 * == textContent -- (Search)
 *
 */

// function changeContent() {
//   var h1 = document.querySelector("#myHead");

//   // get
//   // console.log(h1.innerText);
//   /// set
//   // h1.innerText = "<h1>Hello Dot Net Group</h1>";
//   // h1.innerHTML = "<h1>Hello Dot Net Group</h1>"; // set
// }

/**
 * .style attribute
 *  className
 *  classList
 *    == add
 *    == remove
 *    ==toggle
 *
 */
// function changeStyle() {
//   var p = document.querySelectorAll(".content")[0];
//   // p.classList.toggle("jsClass");
//   // console.log(p.classList);
//   // p.className += " jsClass"; // override
//   // console.log(p.className);
//   // p.style.backgroundColor = "#696a9d";
//   // // p.style.color = "#fff";
//   // p.style.padding = "20px";
// }

/***
 *
 * getAttribute
 * setAttribute
 * hasAttribute
 * removeAttribute
 */

// function operation() {
//   var myImg = document.images[0];
//   myImg.setAttribute("src", "./2.jpg");
//   // console.log(myImg.getAttribute("src"));
//   // var div = document.getElementById("section1");
//   // // console.log(div.hasAttribute("nfk"));
//   // if (div.hasAttribute("class")) {
//   //   div.removeAttribute("class");
//   // } else {
//   //   div.setAttribute("class", "nw test");
//   // }
// }

// function operation() {
//   var input1 = document.getElementById("input1");
//   var result = document.getElementById("result");
//   result.innerHTML = input1.value;
//   // var elements = document.getElementsByName("choose");
//   // if (elements[0].checked) {
//   //   console.log(elements[0].value);
//   // }
// }

function operation() {
  var result = document.getElementById("result");
  var div = document.createElement("div");
  var text = document.createTextNode("this is a div");

  var text2 = document.createTextNode("hello new Text");
  div.innerHTML = "text";
  // div.appendChild(text);

  div.setAttribute("class", "jsClass");
  div.setAttribute("id", "new");
  console.log(div);

  document.body.append(div);

  // document.body.appendChild(div);
  // document.body.appendChild(text2);
}
