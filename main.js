// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//1. il PC genera 16 numeri casuali tra 1 e 100
function cpuRandom(min, max) {
    let bombNumbers = [];
    for ( let i=0; i < 16; i++ ) {
        bombNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return bombNumbers;
}

//2. creo funzione while che chiede un numero fin quando il numero non è dentro bombnumbers
let bombNumbers 
while( bombNumbers.length < 100 ) {
    let number = cpuRandom(1, 16);
    //3. verifica che i numeri non sono duplicati
    if(!bombNumbers.includes(number)) {
        bombNumbers.push(number);
    }
}

//4. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
