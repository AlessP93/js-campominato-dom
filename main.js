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

//2. creo una variabile let e una funzione while che chiede un numero fin quando il numero non è dentro bombnumbers
let bombNumbers = cpuRandom (1, 16);
console.log(bombNumbers);
while( bombNumbers.length < 100 ) {
    let number = cpuRandom(1, 16);
    //3. verifica che i numeri non sono duplicati
    if(!bombNumbers.includes(number)) {
        bombNumbers.push(number);
    }
}
console.log(bombNumbers);

//4. In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//5. L’utente non può inserire più volte lo stesso numero.
let bombExploded = false

//6. dovrai fare un array vuoto dove salvi le scelte che man mano l'utente fa
let attempts = []; 

//7. fare un while che ci permetta di continuare a giocare finchè l'utente non ha fatto 84 scelte (100 - 16 bombe)
while ( !bombExploded && attempts.length < 84 ) {
    let userNumber;
    do {
        //8. dentro al ciclo chiediamo all'utente un numero
        userNumber = Number(prompt("Inserisci un numero"));
        //9. verifichiamo che il numero che inserisce l utente sia valido (tra 1 e 100 e che sia un numero);
    } while ( isNaN(userNumber) || userNumber < 1 || userNumber > 100)
}
// se è un numero valido ci chiediamo poi se è un numero che è già stato scelto (quindi facciamo un controllo nell'array delle scelte dell'utente)
if (userNumber)




// se è un numero valido, allora ci chiediamo se il numero è una bomba (quindi facciamo un controllo sulla bombNumbers che tiene tutte le bombe)
// se è una mina allora abbiamo perso e dobbiamo fermare il gioco
// altrimenti si salva nell'array delle scelte il numero e si continua