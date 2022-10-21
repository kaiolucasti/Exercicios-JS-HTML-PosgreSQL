console.log("Space!")

let space = require('to-space-case');

let x1 = space('InstitutoFederalDeBrasilia');
let y1 = space('Tecnico_em_Desenvolvimento_de_Sistemas');
let z1 = space('desenvolvimento.de.sistemas.web');

console.log(x1);
console.log(y1);
console.log(z1);

console.log();
console.log("Capital!")
console.log();

let capital = require('to-capital-case');

let x2 = capital('InstitutoFederalDeBrasilia');
let y2 = capital('Tecnico_em_Desenvolvimento_de_Sistemas');
let z2 = capital('desenvolvimento.de.sistemas.web');

console.log(x2);
console.log(y2);
console.log(z2);

console.log();
console.log("Constant!")
console.log();

let castant = require('to-constant-case');

let x3 = castant('InstitutoFederalDeBrasilia');
let y3 = castant('Tecnico_em_Desenvolvimento_de_Sistemas');
let z3 = castant('desenvolvimento.de.sistemas.web');

console.log(x3);
console.log(y3);
console.log(z3);