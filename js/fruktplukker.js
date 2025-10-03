// Først, opprett en knapp for å generere fruktene
const gameTitle = document.createElement("h1");
gameTitle.innerHTML = "Fruktplukker Spillet Du har 30 sekunder!";
document.body.appendChild(gameTitle);

const button = document.createElement("button");
button.innerHTML = "Generer frukt";
document.body.appendChild(button);

const fruktTellerDisplay = document.createElement("div");
fruktTellerDisplay.innerHTML = "Frukt plukket: 0";
document.body.appendChild(fruktTellerDisplay);

const timerDisplay = document.createElement("div");
timerDisplay.innerHTML = "Tid: 30 sekunder";
document.body.appendChild(timerDisplay);

document.body.style.textAlign = "center";
document.body.style.marginTop = "100px";
// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", nyFrukt)

let fruktTeller = 0;
let tidIgjen = 30;



button.addEventListener("click", startFruktGenerator);
button.addEventListener("click", startNedtelling);



function startFruktGenerator() {
    document.body.removeChild(button); // Fjern knappen når den er klikket
    document.body.removeChild(gameTitle); // Fjern tittelen når spillet starter
    // Sett fruktTeller til 0 og oppdater displayet
    fruktTeller = 0;
    fruktTellerDisplay.innerHTML = "Frukt plukket: " + fruktTeller;
    // Start intervall som lager nye frukter hvert sekund
    setInterval(nyFrukt, 1000);
}

function startNedtelling() {
    const nedtelling = setInterval(() => {
        tidIgjen--;
        timerDisplay.innerHTML = "Tid: " + tidIgjen + " sekunder";
        if (tidIgjen <= 0) {
            clearInterval(nedtelling);
            
            document.getElementById("gameOverText").innerHTML = "Du plukket " + fruktTeller + " frukter!";
            document.getElementById("gameOverPopup").style.display = "block";
        }
    }, 1000);
}


function nyFrukt() 
{
    const frukt = document.createElement("div");
    frukt.innerHTML = "🍎"; // Du kan endre dette til forskjellige frukt emojis
    frukt.style.fontSize = "2em";
    frukt.style.position = "absolute";
    frukt.style.left = Math.random() * window.innerWidth + 'px'; // Plasser frukten på en tilfeldig x-posisjon
    frukt.style.top = Math.random() * window.innerHeight + 'px'; // Plasser frukten på en tilfeldig y-posisjon
    document.body.appendChild(frukt);

    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)

    setInterval(() => {
        frukt.style.left = Math.random() * window.innerWidth + 'px';
        frukt.style.top = Math.random() * window.innerHeight + 'px';
    }, 1000); // Flytt frukten til en ny tilfeldig posisjon hvert sekund

}


/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target);
    fruktTeller++;
    fruktTellerDisplay.innerHTML = "Frukt plukket:" + fruktTeller;

    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}