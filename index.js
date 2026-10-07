
let numRan1, numRan2;
let numPlayer = 0;
let numHouse = 0;

function displayWin(win) {
    const dialog = document.getElementById('dialog');
    if (win) {
        document.getElementById("txtEnd").textContent = `You win! P:${numPlayer}: H:${numHouse}`;
        dialog.show();
    } else {
        document.getElementById("txtEnd").textContent = `You lose! P:${numPlayer}: H:${numHouse}`;
        dialog.show();
    }
}

function closeModal() {
    const dialog = document.getElementById('dialog');
    console.log("I clicked a button");
    dialog.close();
}

function update() {
    document.getElementById("headNum").textContent = numPlayer;
    document.getElementById("headHouse").textContent = numHouse;
}

function dealHouse() {
    numRan2 = 1 + Math.floor(Math.random() * 10);
    // Increase house counter
    numHouse = Number(numHouse);
    numHouse += numRan2;

    document.getElementById("deckHouse");
    var div_card = document.createElement('div');
    div_card.className = 'card';
    document.getElementById('deckHouse').appendChild(div_card);
}

function dealPlayer() {
    numRan1 = 1 + Math.floor(Math.random() * 10);
    // Increase player counter
    numPlayer = Number(numPlayer);
    numPlayer += numRan1;

    document.getElementById("deckPlayer");
    var div_card = document.createElement('div');
    div_card.className = 'card';
    document.getElementById('deckPlayer').appendChild(div_card);
}

function checkWin() {

    // Natural blackjack
    if (numPlayer == 21) {
        displayWin(true);
        numPlayer = 0;
        numHouse = 0;
        update();
    }

    // Dealer bust
    if (numHouse > 21 && numPlayer <= 21) {
        displayWin(true);
        numPlayer = 0;
        numHouse = 0;
        update();
    }

    //  player loss
    if (numPlayer > 21) {
        displayWin(false);
        numPlayer = 0;
        numHouse = 0;
        update();
    }
}

document.getElementById("btnHit").onclick = function () {

    // deal to house and player
    dealHouse();
    dealPlayer();

    // update the site;
    update();
    checkWin();

}

document.getElementById("btnFold").onclick = function () {
    dealHouse();
    update();
    checkWin();

    // Dealer bust
    if (numPlayer > numHouse && numPlayer <= 21) {
        displayWin(true);
        numPlayer = 0;
        numHouse = 0;
        update();
    } else {
        displayWin(false);
        numPlayer = 0;
        numHouse = 0;
        update();
    }
}


document.getElementById("btnClose").onclick = function () {
    console.log("I clicked a button");
}