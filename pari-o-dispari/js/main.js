/* chiedi all'utente di scrivere un numero tra 1 e 5 */
let numeroUtente = Number(prompt("Inserisci un numero tra 1 e 5"))
/* usiamo la funzione */
pariDispari()
/* scriviamo la funzione */
function pariDispari(){
    /* dichiariamo una variabile con un numero casuale compreso tra 1 e 5 */
    let numeroCasuale = Math.floor(Math.random()*5 + 1)
    /* dichiariamo una variabile che contiene la somma tra i due numeri */
    let numeroFinale = numeroUtente + numeroCasuale
    
    const pari = true
    if(numeroFinale%2 == pari){
        alert("Chi ha scelto pari è il vincitore")
    } else{
        alert('Chi ha scelto dispari è il vincitore')
    }
}