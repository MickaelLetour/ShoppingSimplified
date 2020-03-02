let coup=0;
let joueur1 = 1;
let joueur2 = 0;
let grille = new Array();


for(let i=0; i<3; i++) {
    grille[i]= new Array();
}
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++){
        grille[i][j]="vide";
        let cellule = document.createElement("div");
        cellule.id = `l${i}-c${j}`;
        cellule.classList.add("case");
        document.getElementById("jeu").appendChild(cellule);
        document.getElementById(`l${i}-c${j}`).addEventListener("click",function(event){
            const position = event.target.id;
            const positionX = parseInt(position.charAt(1));
            const positionY = parseInt(position.charAt(4));
            if (grille[positionX][positionY]=="vide") 
            {
                if (joueur1==1){
                    document.querySelector(`#l${i}-c${j}`).style.backgroundImage = "url(img/croix.jpg)";
                    joueur1=0;
                    joueur2=1;
                    grille[positionX][positionY]=0;
                    coup++;
                }
                else if (joueur2==1){
                document.querySelector(`#l${i}-c${j}`).style.backgroundImage = "url(img/rond.jpg)";
                joueur1=1;
                joueur2=0;
                grille[positionX][positionY]=1;
                coup++;
                }
            }
            else 
            {
                console.log("error");
            }
            compare();
        });
        }
    }

function compare() {
    if ((grille[0][0]==0 && grille[1][1]==0 && grille[2][2]==0)||(grille[0][0]==0 &&grille[0][1]==0 &&grille[0][2]==0)||(grille[1][0]==0 &&grille[1][1]==0 &&grille[1][2]==0)||(grille[2][0]==0 &&grille[2][1]==0 &&grille[2][2]==0)||(grille[0][0]==0 &&grille[1][0]==0 &&grille[2][0]==0) || (grille[0][1]==0 &&grille[1][1]==0 &&grille[2][1]==0)||(grille[0][2]==0 &&grille[1][2]==0 &&grille[2][2]==0)||(grille[0][2]==0 &&grille[1][1]==0 &&grille[2][0]==0))
    {
        console.log("J1Win");
    }
    else if ((grille[0][0]==1 && grille[1][1]==1 && grille[2][2]==1)||(grille[0][0]==1 &&grille[0][1]==1 &&grille[0][2]==1)||(grille[1][0]==1 &&grille[1][1]==1 &&grille[1][2]==1)||(grille[2][0]==1 &&grille[2][1]==1 &&grille[2][2]==1)||(grille[0][0]==1 &&grille[1][0]==1 &&grille[2][0]==1) || (grille[0][1]==1 &&grille[1][1]==1 &&grille[2][1]==1)||(grille[0][2]==1 &&grille[1][2]==1 &&grille[2][2]==1)||(grille[0][2]==1 &&grille[1][1]==1 &&grille[2][0]==1))
    {
        console.log("J2Win");
    }
    else if (coup>=9) {
        console.log("egalité");
    }
}
function rejouer () {
        coup=0;

        for(let i=0; i<3; i++)
        {
            for(let j=0; j<3; j++)
            {
            grille[i][j]="vide";
            document.querySelector(`#l${i}-c${j}`).style.backgroundImage=null;

            }
        }
    }
let variable = document.getElementById("replay");

variable.addEventListener("click",function(event) {
    rejouer();
    console.log("hello");
});



