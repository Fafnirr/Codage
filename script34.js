function afficherTitre(){
    let titre = document.getElementById("mon_titre")
    console.log(titre.innerText)
    //let création variable
    //titre nom de la variable
    // = assignation d'une valeur
    //document objet principale de la page qui permet de recuperer d'autres element de la page
    //getElementById c'esst une methode ou une fonction qui permet de recuperer un element via son id/identifiant
    //a la fin de l'éxecution de la ligne 2 la variable titre contient l'objet html de la ligne 8 du fichier exercice34.html

}
function afficherTitre2(){
    let titre = document.getElementById("titre2")
    console.log(titre.innerText)
}

function ModifierTitre(){
    let titre = document.getElementById("mon_titre")
    titre.innerText ="Mon nouveau titre"
}

function ModifierTitre2(){
    let titre2 = document.getElementById("titre2")
    titre2.innerText ="Mon deuxieme titre"
}
/*
let boutonAfficher = document.getElementById(afficherH1)
let boutonModif = document.getElementById(modifH1)*/