let variablePlus = document.getElementById("boxPlus");
let variableMoins = document.getElementById("boxMoins");
let variable = document.getElementById("box");
let nb =0;
variablePlus.addEventListener("click", function(){
    nb++;
    variable.innerText = nb;
    console.log(nb);
})
variableMoins.addEventListener("click", function(){
    nb--;
    variable.innerText = nb;
    console.log(nb);
})

