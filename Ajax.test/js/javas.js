let button = document.getElementById("boutton");
button.addEventListener("change",function(){
    requete(this.value);
})

function requete(nb) {
let resultat = document.getElementById("tables");
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    resultat.innerHTML = this.responseText;
    }
}
xhr.open("GET","table.php?choix="+nb, true);
xhr.send();
}

