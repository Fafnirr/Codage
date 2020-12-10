number = prompt("donnez un nombre entre 10 et 20")
while(10>number || 20<number){

    if(number<10){
        alert("Plus grand !")
    }
    else if(number>20){
        alert("Plus petit !")
    }
    number = prompt("donnez un nombre entre 10 et 20")
}
alert("nombre correct !")
