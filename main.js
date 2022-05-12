// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// Scrivi un programma che stampi in console i numeri da 1 a 100       HTML
const list = document.querySelector(".list")
for (let i = 1; i <= 100; i++) {
    const element = document.createElement("li");
    element.classList.add("item");
    element.innerHTML = i;
    list.append(element);
}

//1. il PC genera 16 numeri casuali tra 1 e 100      CPURANDOM
function cpuRandom(min, max) {
   return Math.floor(Math.random() * 100) + 1;
}

//2. creo un array vuoto e una funzione while che chiede un numero fin quando il numero non è dentro   BOMBLIST
const bombList = [];
while( bombList.length < 16 ) {
    const number = cpuRandom(1, 100);
    //3. verifica che i numeri non sono duplicati 
    if(!bombList.includes(number)) {
        bombList.push(number);
    }
    console.log(number);
}


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

    //10. ci chiediamo poi se è un numero che è già stato scelto (quindi facciamo un controllo nell'array delle scelte dell'utente) array attempt
    if ( bombList.includes(userNumber)) {
        bombExploded = true;
        alert("Hai preso una bomba!")
        //11. ci chiediamo poi se il numero è una bomba (quindi facciamo un controllo sulla bombNumbers che tiene tutte le bombe)
    } else if ( attempts.includes(userNumber) ) {
        alert("Il numero è gia stato scelto")
    } else {
        //12. altrimenti si salva nell'array delle scelte il numero e si continua
        attempts.push(userNumber)
    }
    //13. se è una mina allora abbiamo perso e dobbiamo fermare il gioco
    console.log("Il gioco è terminato");
    
}



