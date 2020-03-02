let bisous = 0;
const caseB = document.getElementById("caseBisous");
const case1 = document.getElementById("fond1");
const case2 = document.getElementById("fond2");
const case3 = document.getElementById("fond3");
const clickP = document.getElementById("clickPlus");
let clickA = 1;
let bisS = 0;

document.querySelector("#click").innerText = bisous;
document.querySelector("p").innerText = bisS;


function augmenter1() {
    bisous++; 
    document.querySelector("#click").innerText = bisous;
    document.querySelector("p").innerText = bisS;
}

function augmenter2() {
    bisous = bisous + 10;
    document.querySelector("#click").innerText = bisous;
    document.querySelector("p").innerText = bisS;
}

function augmenter3() {
    bisous = bisous + 100;
    document.querySelector("#click").innerText = bisous;
    document.querySelector("p").innerText = bisS;
}

clickP.addEventListener("click",function(event) {
    if (bisous>5) {
        bisous = bisous - 5;
        document.querySelector("#click").innerText = bisous;
        clickA++;
        document.querySelector("#clickPlus").style.backgroundColor = "black";
    }
})
caseB.addEventListener("click", function(event) {
    bisous = bisous + clickA;
    document.querySelector("#click").innerText = bisous;
} )

case1.addEventListener("click",function(event) {
    if (bisous>10) {
        bisous = bisous - 10;
        bisS = bisS + 1;
        setInterval("augmenter1()", 1000);
        document.querySelector("#fond1").style.backgroundColor = "black";
    }
    
})

case2.addEventListener("click",function(event) {
    if (bisous>100) {
        bisous = bisous - 100;
        bisS= bisS + 10;
        setInterval("augmenter2()", 1000);
        document.querySelector("#fond2").style.backgroundColor = "black";
    }
    
})

case3.addEventListener("click",function(event) {
    if (bisous>500) {
        bisous = bisous - 500;
        bisS= bisS + 100;
        setInterval("augmenter3()", 1000);
        document.querySelector("#fond3").style.backgroundColor = "black";
    }
    
})

