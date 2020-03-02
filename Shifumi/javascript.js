const feuille = document.getElementById("feuille");
const ciseaux = document.getElementById("ciseaux");
const pierre = document.getElementById("pierre");

let nomJ = prompt("Entrez votre pseudo",)
document.querySelector("#nomJoueur").innerText = nomJ;

feuille.addEventListener("click",function(event) {
    choixU = feuille;
    if (choixU == feuille) {
        document.querySelector("#choixJoueur").style.backgroundImage="url(img/Feuille.jpg)";
    }
        let choixIA = Math.floor(Math.random() *60);
        if (choixIA>40){
            choixIA = pierre;
            document.querySelector("#choixOrdi").style.backgroundImage="url(img/Pierre.jpg)";
        }
        else if (choixIA>20){
            choixIA =feuille;
            document.querySelector("#choixOrdi").style.backgroundImage="url(img/Feuille.jpg)";
        }
        else {
            choixIA =ciseaux;
            document.querySelector("#choixOrdi").style.backgroundImage="url(img/Ciseaux.jpg)";
        }
        console.log(choixIA);
        compare(choixU,choixIA);
    
    
});
ciseaux.addEventListener("click",function(event) {
    choixU = ciseaux;
    if (choixU == ciseaux) {
        document.querySelector("#choixJoueur").style.backgroundImage="url(img/Ciseaux.jpg)";
        
    }
    let choixIA = Math.floor(Math.random() *60);
    if (choixIA>40){
        choixIA = pierre;
        document.querySelector("#choixOrdi").style.backgroundImage="url(img/Pierre.jpg)";
    }
    else if (choixIA>20){
        choixIA =feuille;
        document.querySelector("#choixOrdi").style.backgroundImage="url(img/Feuille.jpg)";
    }
    else {
        choixIA =ciseaux;
        document.querySelector("#choixOrdi").style.backgroundImage="url(img/Ciseaux.jpg)";
    }
    console.log(choixIA);
    compare(choixU,choixIA);
});
pierre.addEventListener("click",function(event) {
    choixU = pierre;
    if (choixU == pierre) {
        document.querySelector("#choixJoueur").style.backgroundImage="url(img/Pierre.jpg)";
        
    }
    let choixIA = Math.floor(Math.random() *60)
    if (choixIA>40){
        choixIA = pierre;
        document.querySelector("#choixOrdi").style.backgroundImage="url(img/Pierre.jpg)";
    }
    else if (choixIA>20){
        choixIA =feuille;
        document.querySelector("#choixOrdi").style.backgroundImage="url(img/Feuille.jpg)";
    }
    else {
        choixIA =ciseaux;
        document.querySelector("#choixOrdi").style.backgroundImage="url(img/Ciseaux.jpg)";
    }
    console.log(choixIA);
    compare(choixU,choixIA);
});

const victoire = document.getElementById("victoire");
const egalite = document.getElementById("egalite");
const defaite = document.getElementById("defaite");
let v=0;
let e=0;
let d=0;



function compare(a,b) {
    if (a == b) {
        console.log("Egalité");
        (document.getElementById("resultat").innerHTML) = "<h2>Egalité!</h2>";
        e++;
        egalite.innerText=e;

    }
    else if ((a==pierre && b==feuille) || (a==feuille && b==ciseaux) || (a==ciseaux && b==pierre)){
        console.log("Perdu");
        (document.getElementById("resultat").innerHTML) = "<h2>Perdu!</h2>";
        d++;
        defaite.innerText=d;
    }
    else if ((b==pierre && a==feuille) || (b==feuille && a==ciseaux) || (b==ciseaux && a==pierre)){
        console.log("Gagné");
        (document.getElementById("resultat").innerHTML) = "<h2>Gagné!</h2>";
        v++;
        victoire.innerText=v;
        
}
}

