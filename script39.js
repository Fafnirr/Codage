let DivP = document.getElementById("divJuan")
let H1e = document.createElement("h1")
let Pe = document.createElement("p")

let Titre2 = document.createElement("h2")

Titre2.innerText="Title2"
H1e.innerText = "Quis";
Pe.innerText = "My a**";

DivP.appendChild(H1e);
DivP.appendChild(Pe);

function changer(){
    DivP.removeChild(H1e)
    DivP.appendChild(Titre2)
    DivP.replaceChild(Titre2, DivP.firstChild)
}

function Delete(id){
    let deleteCa = document.getElementById(id)
    DivP.removeChild(deleteCa)
}
