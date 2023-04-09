// function getUserData() {
//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     var tbody = document.getElementById("content");
//     if (xhr.readyState == 4) {
//       if (xhr.status == 200) {
//         var userData = JSON.parse(xhr.response);
//         var tr = document.createElement("tr");
//         var td1 = document.createElement("td");
//         var td2 = document.createElement("td");
//         var td3 = document.createElement("td");

//         td1.innerHTML = userData.id;
//         td2.innerHTML = userData.name;
//         td3.innerHTML = userData.email;

//         tr.append(td1, td2, td3);
//         tbody.appendChild(tr);
//       }
//     }
//   };
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/users/6");
//   xhr.send("");
// }

// var myDate = new Date();
// myDate.setDate(myDate.getDate() - 2);

// document.cookie = "username=mona;expires=" + myDate;
// // document.cookie = "password=123";
// console.log(document.cookie);

// function saveCookie(key, value) {
//   document.cookie = key + "=" + value + ";expires=" + myDate;
// }

// function getCookie(key){

// }

// hasCokkie(key){

// }

// deleteCookie()

// saveCookie("username","Ali")
// saveCookie("email","a@a.come")

// document.cookie = "username=mona;expires=" + myDate;

// try {
//   console.log("First");
//   console.loggg("Second");
//   console.log("Thid");
// } catch (error) {
//   console.log("Please Try again .. connection Error");
// } finally {
//   document.writeln("Welcome From ITI");
// }

// function test(a, b) {
//   if (arguments.length > 2) {
//     throw "PAss 2 arguments only";
//   }

//   return a + b;
// }

// test(1, 2, 7, 8);

//call , bind , apply
var fname = "mona";
function getName() {
  console.log(this.fname);
}
var person = {
  fname: "ali",
  display: function () {
    getName();
  },
};

person.display();
// var person = {
//   fname: "ali",
//   display: getName,
// };

// person.display();
