//Ajoute un Div dans section

let maSection = document.getElementsByTagName("section");

// Récupère la valeur de section
maSectionValeur = maSection[0]
console.log("La valeur de ma section est : " + maSectionValeur.innerText)

// Ajoute une nouvelle div
let newDiv = document.createElement("div");
maSectionValeur.appendChild(newDiv)

// Ajoute un id
newDiv.setAttribute("id","div_1")

// Ajout une nouvelle class 
newDiv.setAttribute("class","class_1")

// Ajoute du texte dans ma div
newDiv.innerText = "mon texte"

// Ajoute uen balise a
let newDivHref = document.createElement("a");
maSectionValeur.appendChild(newDivHref)

// Ajoute du texte dans ma balise a
newDivHref.setAttribute("href","http://www.wikipedia.fr")
newDivHref.innerText = "www.wikipedia.fr"