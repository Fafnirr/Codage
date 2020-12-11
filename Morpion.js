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
    //message gagnant bleu
    let case1 = document.getElementById("case1")
    let case2 = document.getElementById("case2")
    let case3 = document.getElementById("case3")
    if (case1.classList.contains("blue") && case2.classList.contains("blue") && case3.classList.contains("blue") //ligne 1
        /*
        case4, case5, case6  case7, case8, case9  // les 3 largeurs
        case1, case4, case7  case2, case5, case8  case3, case6, case9  // les 3 hauteurs
        case1, case5, case9 || case3, case5, case7 // les 2 diagonales
        ==
        "blue"*/
    ) {
        alert("VICTOIRE BLEU!!!!")
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