// var person = {
//   fname: "ali",
//   age: 50,
//   address: {
//     city: "bana",
//     street: "saad str",
//     code: 123,
//   },
//   colors: ["red", "green", "blue"],
//   display: function () {
//     console.log(person.fname);
//   },
// };

// person.display();

// console.log(person.colors[0]);
// var city = person["address"].city;
// console.log(city);

// set

// person.color = "red"; // add
// person.fname = "ahmed"; // override
// person["fname"] = "alaa";
// console.log(person);
// get
// console.log(person.color);
// console.log(person["address"]);

/**
 * Dot Notation
 * Subscript Notation
 *
 */
/**
 * Properties--> key : value [any datatype]
 * Methods
 *
 */

// var fname = "mona"; // string object

// console.log(fname.length); //

// fname.indexOf("f")

/**
 * Date
 *
 *
 */

// var myDate = new Date();
// /**
//  * 0
//  * 1
//  * 2
//  * 3
//  *
//   */
// console.log(myDate.getDay());

/**
 * Math
 * ------------
 * PI
 * --------
 * sqrt -->
 * abs -->
 * pow -->
 * sign --> 1  Positive
 *      -- -1  negative
 *      -- 0  0
 * ----
 * min
 * max
 * ---
 * round --
 * floor
 * ceil
 * random
 *
 */
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.sin((90 * Math.PI) / 180));
/** ===========
 *
 * primitive datatype
 *
 * refernce datatype
 *
 *  ======= */
// var arr1 = [10, 20, 30];
// var arr2 = [];

// for (var i = 0; i < arr1.length; i++) {
//   arr2[i] = arr1[i];
// }

// arr1.push("ali");

// console.log("arr1 :", arr1);
// console.log("arr2 :", arr2);

/** not iterale */
// let person = {
//   fname: "ali",
//   age: 30,
//   color: "red",
// };

// console.log(Object.keys(person));
// for (var key in person) {
//   console.log(person[key]);
// }

// var arr = ["mona", 20, 50];

var str = "dgy";
for (var i in str) {
  console.log(str[i]);
}
