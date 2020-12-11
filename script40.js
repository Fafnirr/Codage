//creer table
let tableau = document.createElement("table")
let ligne1 = document.createElement("tr")
let ligne2 = document.createElement("tr")
let tab1 = document.createElement("td")
let tab2 = document.createElement("td")
let tab3 = document.createElement("td")
let tab4 = document.createElement("td")
let Tout = document.getElementById("id1")

tab1.innerText = "aaa";
tab2.innerText = "bbb";
tab3.innerText = "ccc";
tab4.innerText = "ddd";

ligne1.appendChild(tab1);
ligne2.appendChild(tab3);
ligne1.appendChild(tab2);
ligne2.appendChild(tab4);

tableau.appendChild(ligne1)
tableau.appendChild(ligne2)

Tout.appendChild(tableau)