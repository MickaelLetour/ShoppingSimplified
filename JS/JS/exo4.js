const age = prompt("Quel est votre age?", 29);
const condition = true;


if (condition === true) {
console.log("coucou");
} 
else{
    console.log("pas coucou");
}

if (age < 18 ) {
    console.log("vous êtes mineur");
}
    else if (age>=100) {
    console.log("vous êtes terminés!");
    }
    else if (age >= 60 ) {
        console.log("vous êtes vieux");
    }
    
else{
    console.log("vous êtes majeur");
}