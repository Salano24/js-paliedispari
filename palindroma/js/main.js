//Chiedere all’utente di inserire una parola 

//prompt
//let
/* chiedo all'utente di inserire una parola */
let userWord = prompt('Inserisci una parola')

//Creare una funzione per capire se la parola inserita è palindroma

//function
//if else 
//charAt()
/* trasformo tutte le lettere della parola in minuscole */
userWord = userWord.toLowerCase()
console.log(userWord);

/* verifico che la parola sia composta da almeno 2 lettere */
if (userWord.length < 2) {
    alert('La parola deve contenere almeno 2 caratteri')
}

/* dichiaro due variabili che corrispondono alla prima lettera e all'ultima lettera della parola */
let primaLettera = userWord.charAt(0)
let ultimaLettera = userWord.charAt(userWord.length-1)
console.log(primaLettera, ultimaLettera);
