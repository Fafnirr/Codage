function Suivant(){
    let AfficheImage1 = document.getElementById("img1")
    let AfficheImage2 = document.getElementById("img2")
    let AfficheImage3 = document.getElementById("img3")

    if(AfficheImage1.classList.contains("affiche")){
        AfficheImage1.classList.remove("affiche")
        AfficheImage1.classList.add("masque")
        AfficheImage2.classList.remove("masque")
        AfficheImage2.classList.add("affiche")
        /*AfficheImage2.style.display="inherit"
        AfficheImage3.style.display="none"
        AfficheImage1.style.display="none"*/
    }

    else if(AfficheImage2.classList.contains("affiche")){
        AfficheImage2.classList.remove("affiche")
        AfficheImage2.classList.add("masque")
        AfficheImage3.classList.remove("masque")
        AfficheImage3.classList.add("affiche")
    }
    else{
        AfficheImage3.classList.remove("affiche")
        AfficheImage3.classList.add("masque")
        AfficheImage1.classList.remove("masque")
        AfficheImage1.classList.add("affiche")
    }
}