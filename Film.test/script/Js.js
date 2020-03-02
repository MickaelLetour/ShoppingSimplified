let button = document.getElementsById("button");
button.addEventListener("change",function(){
    requete(this.value);
})
function requete(aff) {
    let resultat = document.getElementsByClassName("affiche");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        resultat.innerHTML = this.responseText;
        }
    }
    xhr.open("GET","table.php?id="+aff, true);
    xhr.send();
    }