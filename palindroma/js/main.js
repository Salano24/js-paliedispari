/* chiediamo all'utente di inserire una parola */
let userWord = prompt("Inserisci una parola")
/* verifichiamo che il valore inserito non sia un numero */
if(!isNaN(userWord)){
    alert("Please refresh and insert a word")
} /* in caso contrario usiamo la funzione per verificare che la parola sia palindroma */
else {
    palindroma()
}
/* scriviamo la funzione di verifica */
function palindroma(){

    /* stabiliamo due variabili, una per contare il numero di caratteri, l'altra per verificare carattere per carattere */
    let contatore = -1
    let verificato = 0
    
    /* scrittura ciclo for per verificare tutti i caratteri */
    for(let i = userWord.length-1; i >= 0; i--){
        
        /* ad ogni giro implementare contatore di un carattere */
        contatore++
        /* se i caratteri corrispondono implementare 'verificato', senò stampare un alert */
        if(userWord[i] == userWord[contatore]){
            verificato ++ 
        } else {
            alert("La tua parola non è palindroma")
            break
        }
        /* se tutti i caratteri sono stati verificati stampare un alert */
        if(verificato == userWord.length){
            alert("La tua parola è palindroma")
        }
    }
}
