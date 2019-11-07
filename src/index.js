const strtGame = () => {
    document.getElementById("strtScrn").style.display = "none";
    document.getElementById("selectionScrn").style.display = "block";
}

//CIPHER

const beginCipher = () => {
    document.getElementById("selectionScrn").style.display = "none";
    document.getElementById("cipherScrn").style.display = "block";
}
const continueToMsgCipherInput = () => {
    document.getElementById("cipherScrn").style.display = "none";
    document.getElementById("msgToCipherScrn").style.display = "block";
}

const continueToCipheredMsgScrn = () => {
    document.getElementById("msgToCipherScrn").style.display = "none";
    document.getElementById("cipheredMsgScrn").style.display = "block";
}


//DECIPHER

const beginDecipher = () => {
    document.getElementById("selectionScrn").style.display = "none";
    document.getElementById("decipherScrn").style.display = "block";
}

const continueToMsgDecipherInput = () => {
    document.getElementById("decipherScrn").style.display = "none";
    document.getElementById("msgToDecipherScrn").style.display = "block";
}

const continueToDecipheredMsgScrn = () => {
    document.getElementById("msgToDecipherScrn").style.display = "none";
    document.getElementById("decipheredMsgScrn").style.display = "block";
}

//RESTART
const restrt = () => {
    document.getElementById("cipheredMsgScrn").style.display = "none";
    document.getElementById("decipheredMsgScrn").style.display = "none";
    document.getElementById("strtScrn").style.display = "block";
}

document.getElementById("cipherBegin").addEventListener("click", encode);
document.getElementById("decipherBegin").addEventListener("click", decode);