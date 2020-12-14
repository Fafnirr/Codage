let divs= document.getElementsByTagName("div")
console.log("il y a " + divs.length + " divs dans mon script qui contiennet:")

for (let i=0; i<divs.length; i++){
    let cellule1 = divs[i];
    console.log(cellule1.innerText)
}

let divsJaune = document.getElementsByClassName("b_yellow")
console.log("il y a " + divsJaune.length + "divs jaunes voici ce qu'elles contiennet:");

for (let i=0; i<divsJaune.length; i++){
    let cellule2 = divsJaune[i];
    console.log(cellule2.innerText)
}

let section= document.querySelector("#container .b_yellow")

console.log("voici le contenue de l'element identifié par le selecteur #container .b_yellow " + section.innerText )


let section2= document.querySelectorAll("#container .b_yellow");
console.log("il y a " + section2.length + " balises qui ont une classe b_yellow :" );
for (let i=0; i<section2.length; i++){
    let cellule3 = section2[i];
    console.log(cellule3.innerText)
}

