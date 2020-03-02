console.log(document.getElementById("bloc1").innerText);
(document.getElementById("bloc1").innerHTML) = "<h1>Yep</h1>";
const bloc1 = document.getElementById("bloc1");
console.log(bloc1.innerText);
bloc1.innerText = "Yop all";
console.log(document.getElementsByTagName("div"));
console.log(document);
console.log(document.querySelector("#bloc1"));
document.querySelector("#bloc1").style.backgroundColor = "lightblue";

console.log(document.getElementById("leTitre").innerText);
document.getElementById("leTitre").innerText = "un autre titre";

const button = document.getElementById("button");
let nombreDeClick = 0;

button.addEventListener("click", function(event){
    nombreDeClick++;
    console.log(nombreDeClick);
    button.innerText = nombreDeClick;
    if (nombreDeClick > 50 ) {
        document.querySelector("#button").style.backgroundColor = "lightblue";
    }
    else if (nombreDeClick > 25) {
        document.querySelector("#button").style.backgroundColor = "green";
    }

    else if (nombreDeClick >10) {
        document.querySelector("#button").style.backgroundColor = "orange";
    }
    if (nombreDeClick >35 ) {
        document.body.style.backgroundColor = "black";
    }
});


