/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

function abbrevName(name) {
	// Get first letter of first word: name[0]
	// Get first letter of second word: name[name.indexOf(" ") + 1]

	return `${name[0].toUpperCase()}.${name[name.indexOf(" ") + 1].toUpperCase()}`
}

// Using map()
function abbrevName(name) {
	return name.split(" ").map(function (word) {
		return word[0].toUpperCase()
	}).join(".")
}