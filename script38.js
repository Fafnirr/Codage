function Suivant(){
    let AfficheImage1 = document.getElementById("img1")
    let AfficheImage2 = document.getElementById("img2")
    let AfficheImage3 = document.getElementById("img3")

    if(AfficheImage1.style.display=="" || AfficheImage1.style.display =="inherit"){
       AfficheImage2.classList.add("affiche")
       AfficheImage2.classList.add("affiche")
       AfficheImage3.classList.add("masque")
       AfficheImage3.classList.add("masque")
       AfficheImage1.classList.add("masque")
       AfficheImage1.classList.add("masque")
        /*AfficheImage2.style.display="inherit"
        AfficheImage3.style.display="none"
        AfficheImage1.style.display="none"*/
    }
    else if(AfficheImage2.style.display=="inherit" || AfficheImage2.style.display=="" ){
        AfficheImage2.classList.add("masque")
        AfficheImage2.classList.remove("afficher")
        AfficheImage3.classList.add("masque")
        AfficheImage3.classList.remove("affiche")
        AfficheImage1.classList.add("masque")
        AfficheImage1.classList.remove("affiche")
    }
    else{
        AfficheImage2.classList.add("masque")
        AfficheImage2.classList.add("affiche")
        AfficheImage3.classList.add("masque")
        AfficheImage3.classList.add("masque")
        AfficheImage1.classList.add("affiche")
        AfficheImage1.classList.add("affiche")
    }
}