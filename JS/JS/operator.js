let a = 2;
let b = 3;
let c;
let d = 1;
let e;

c = a + b ;
console.log(c);
// return 5

c = b - a ;
console.log(c);
// return 1

c = a * b;
console.log(c);
// return 6

c = b / a;
console.log(c);
// return 1.5

c = b % a;
console.log(c);
// return 1
// donne le reste de la division Euclidienne
// On apellera ca le MODULO

d += 2;
// equivaut a d = d +2 
console.log(d);

d -= 2; //equivaut à d = d - 2
console.log(d);

d++; //equivaut à d = d + 1
console.log(d);


let motUn = "coucou";
let motDeux = "le monde";
console.log(motUn + " " + motDeux);

// Comparaisons ::

c = a > b ; // false
console.log(c); 
c = a < b ; // true
console.log(c); 

c = a >= b ; // false
console.log(c); 
c = a <= b ; // true
console.log(c); 

c = ( a == b) ; // égalité
console.log(c); 
c = (a != b) ; // différence
console.log(c); 

c = ( a === b) ; // compare le type puis la valeurs. 
console.log(c); 
c = (a !== b) ; // compare le type puis la valeurs.
console.log(c); 

a = "1"; // this is a string
b = 1 ; // this is a number

c = ( a == b) ; // true
console.log(c); 
c = (a != b) ; // false
console.log(c); 

c = ( a === b) ; // false
console.log(c); 
c = (a !== b) ; // true
console.log(c); 

a = 1;
b = 2;
c = 3;
d = 4;

// && : ET logique => Si les deux valeurs sont true alors retourne true, sinon false.

e = a < b && c < d; // true
e = a < b && c > d; // false
;
// || : OU logique; => Si au moins une des deux valeurs est true alors renvoie true. Sinon false

e = a < b || c < d; // true
e = a < b || c > d; // true
e = a > b || c > d; // false

e = true;
e = !e; //false
e = false;
e = !e; //true

console.log(e);