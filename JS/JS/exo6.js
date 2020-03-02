let a = Math.floor(Math.random() * 101);
console.log(a);
let b;
let c = 0;

    
    while (c<10 && b!=a) {
        b = prompt("un chiffre entrer 0 et 100",);
        console.log(b);
        c++;  
            if (c=10){
            console.log("You are the looser!");
            console.log("Nombre d'essaies " + c );
            }
            else if ( b>a) {
                console.log("Trop grand");
                }
            else if (b<a) {
                console.log("trop petit"); 
                }
            else if (b==a){
                console.log("You are the winner!");
                console.log("Nombre d'essaies " + c );
            }  
            
            }
    
    