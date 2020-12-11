//color_case = la couleur de la case précedament coloré
let color_case ="rose"

function jouer(id){
    console.log(id)
    let cell = document.getElementById(id)
    //on verifie que la celule ne contient pas déjà une classe rose ou bleu
    //si la celule contient une classe rose ou blue alors on ne peut pas changer la couleur sinon on change la couleur
    if (cell.classList.contains("rose") || cell.classList.contains("blue")){

    }
    else {
            //if si la case d'avant était bleu alors la prchaine est rose
    if (color_case=="blue"){
        
        cell.classList.add("rose")
        color_case="rose"
    }
    else{
        
        cell.classList.add("blue")
        color_case="blue"
    }
    }


}

function Rejouer(){
    let cell = document.getElementById("case1")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case2")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case3")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case4")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case5")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case6")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case7")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case8")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
    cell = document.getElementById("case9")
    cell.classList.remove("blue")
    cell.classList.remove("rose")
}