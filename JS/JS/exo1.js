let age = prompt("Quel est votre age?", 29);
let prenom = prompt("Quel est votre prénom?", "John");
let accueil =("Bonjour, ");
let accueil1 =(" vous avez ");
let accueil2 =(" ans!");
let acceuilFinale;
let naissance =(" Vous êtes nés en ");
let date = new Date();
let annee = date.getFullYear();
let age1 = (annee - age);

console.log(prenom);
console.log(age);
acceuilFinale = console.log(accueil + prenom + accueil1 + age + accueil2);
console.log(accueil + prenom + naissance + age1);
