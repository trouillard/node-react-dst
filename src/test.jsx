import DST from './DST';

/*
var test = new DST(
		8,
		"North America",
		"Wall",
		">",
		3,
		7,
		0,
		2,
		"Wall",
		">",
		11,
		1,
		0,
		2);
*/
/*
var test = new DST(
		13,
		"European Union",
		"UTC",
		"last",
		3,
		1,
		0,
		1,
		"UTC",
		"last",
		10,
		7,
		0,
		1
);
*/
/*
var test = new DST(
		10,
		"Cuba",
		"Standard",
		">",
		3,
		8,
		0,
		0,
		"Standard",
		">",
		11,
		1,
		0,
		0
);
*/
var test = new DST(
		7,
		"Brazil",
		"Wall",
		">",
		11,
		1,
		0,
		0,
		"Wall",
		">",
		2,
		14,
		0,
		0
);


var jour_on = test.calculJour_on(2018);
console.log("Date On Avant : " + jour_on);
test.calculHoraires_on(jour_on, 1, 1);
console.log("Date On Apres : " + jour_on );

var jour_off = test.calculJour_off(2018);
console.log("Date Off Avant : " + jour_off);
test.calculHoraires_off(jour_off, 1, 1);
console.log("Date Off Apres : " + jour_off );