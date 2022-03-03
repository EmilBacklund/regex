var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/;

// var regex = /Mount\.$/;
// var regex = /this/i;
// var regex = /^this/i;
// var regex = /this$/i;
// var regex = /ever\.$/;

// .
// means any word, so to searh for something with dot after you have to
// use a escape character before the dot.

// $
// Checks if it appears at the end of these strings

// ^
//Checks if the regular expression happens in the
// beginning of the senctence

// i
// With this flag the search is case-insensitive:
// no difference between A and a.

// test() method executes a search for
// the match between a regular expression and
// a specified string. true or fale boolean.

console.log("string1", regex.test(string1));
console.log("string2", regex.test(string2));
console.log("string3", regex.test(string3));
console.log("string4", regex.test(string4));

// string1 false
// string2 false
// string3 true
// string4 false

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
// https://www.w3schools.com/js/js_regexp.asp
