function Suivant(){
    let AfficheDivViolet = document.getElementById("divViolet")
    let AfficheDivRouge = document.getElementById("divRouge")
    let AfficheDivVerte = document.getElementById("divVerte")

    if(AfficheDivViolet.style.display=="" || AfficheDivViolet.style.display =="inherit"){
        AfficheDivRouge.style.display="inherit"
        AfficheDivVerte.style.display="none"
        AfficheDivViolet.style.display="none"
    }
    else if(AfficheDivRouge.style.display=="inherit"){
        AfficheDivRouge.style.display="none"
        AfficheDivVerte.style.display="inherit"
        AfficheDivViolet.style.display="none"
    }
    else{
        AfficheDivRouge.style.display="none"
        AfficheDivVerte.style.display="none"
        AfficheDivViolet.style.display="inherit"
    }
}