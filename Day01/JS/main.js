// fname = "alaa"; // reassign, string
// fname = 10; // reassign , number

// fname = true;
// var fname = "ali"; // string

// console.log(fname);
// var fname = "ahmed"; // redeclare
// console.log(fname);

// test = "mona";
// console.log(typeof test);

// var test = null;

/**
 *
 * test = {} // empty object
 *
 *
 */

// console.log(typeof test);

/** Datatype In Js (Primitive Datatype)
 * -------------------------------------
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 * -- (symbol) in es6
 * ---------------------------------------
 * == Refernce Datatype --> Object --
 */
// var fname = 3;

// console.log(fname);
// console.log(typeof fname);
// var fname = String(3);

// console.log(fname);
// console.log(typeof fname);

// var flag = Boolean("kopokmgh");

// console.log(flag);
/** falsy Values
 * ------------------
 *  0 , false , "" , undefined, NaN, null
 *
 */

// var num = Number("mona"); // NaN --> Not A Number
// console.log(num);
// console.log(typeof num);

/** camelCase */
// var firstName = "ali";
// var firstSecondThird = "";

// var a = "dk";

// console.log(a);
/** + , - , * , / */

/**
 * JSEngine , coercion
 * ----------
 * (+) ==> number + number --> add
 * (+) ==> string + string --> concat
 */

// var num1 = "Welcome"; // string
// var num2 = "From ITI"; // string

// console.log(num1 + num2);

/**
 * coercion -> js engin automaically convert from datatype to anther datatype
 */
// var num1 = 3; // number

// var num2 = "mona"; // string , NaN

// console.log(num1 - num2);
/**
 *  ( == ) ==> (values only) --> coercion
 *  (===) ==> (values && Datatypes)
 *
 */

// var a = "true"; // NaN
// var b = true; // 1

// console.log(a === b);
/**
 * &&
 *
 *
 * true && true  --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * ===============================
 * ||
 * -------------------------------
 * true || true  --> true
 * true || false --> true
 * false || true --> true
 * false || false --> false
 * ===============================
 *Not 

   == true --> false 
   == false --> true
 *
 */

//    "mona" || 0 ==> "mona"

//    undefined || 0 -->
// "mona" && "ola";

// true &&   true-->  true

// 0 && "mona"

// false && ---> false
/** */

// for (var i = 0; i < 5; i++) {}
// if ... else
// if (condition) {
//   // true block
// } else {
//   // else case
// }
// var a = "ali";

// a == "ali" ? console.log("Hello sara") : console.log("Hello Dot net");
// for (var i = 1; i < 7; i++) {
//   document.writeln("<h" + i + ">Welcome From ITI</h" + i + ">");
// }

// var num1 = Number(prompt("Enter Number 1")); // string
// var num2 = Number(prompt("Enter Number 2")); // string

// document.writeln("<h1 '>Hello From JS</h1>");
