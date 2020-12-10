tab=[10,20,30,40,50,60,70,80,90,100]

for(let i=0;i<tab.length;i++){
    console.log("à la case "+i+" le tableau prend la valeur "+tab[i])
}
/*for(let i=0;i<tab.length;i++){
    resultat = tab[i]*10
    console.log("à la case "+i+" le tableau prend la valeur "+ resultat)
    document.write("à la case "+i+" le tableau prend la valeur "+ resultat)
}*/
for(let j=0;j<tab.length;j++){
    tab[j] = tab[j]*10
}
for(let i=0;i<tab.length;i++){
    console.log("à la case "+i+" le tableau prend la valeur "+tab[i])
}