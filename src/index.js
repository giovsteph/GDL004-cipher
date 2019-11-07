const strtGame = () => {
    document.getElementById("strtScrn").style.display = "none";
    document.getElementById("selectionScrn").style.display = "block";
}
document.getElementById("strtBtn").addEventListener("click", strtGame);

//CIPHER

const beginCipher = () => {
    document.getElementById("selectionScrn").style.display = "none";
    document.getElementById("cipherScrn").style.display = "block";
}
document.getElementById("strtCipher").addEventListener("click", beginCipher);

const continueToMsgCipherInput = () => {
    document.getElementById("cipherScrn").style.display = "none";
    document.getElementById("msgToCipherScrn").style.display = "block";
}
document.getElementById("continueToMsgInput").addEventListener("click", continueToMsgCipherInput);



//DECIPHER

const beginDecipher = () => {
    document.getElementById("selectionScrn").style.display = "none";
    document.getElementById("decipherScrn").style.display = "block";
}
document.getElementById("strtDecipher").addEventListener("click", beginDecipher);

const continueToMsgDecipherInput = () => {
    document.getElementById("decipherScrn").style.display = "none";
    document.getElementById("msgToDecipherScrn").style.display = "block";
}
document.getElementById("continueToMsgInputDec").addEventListener("click", continueToMsgDecipherInput);



//RESTART
const restrt = () => {
    document.getElementById("cipheredMsgScrn").style.display = "none";
    document.getElementById("decipheredMsgScrn").style.display = "none";
    document.getElementById("strtScrn").style.display = "block";
    document.getElementById("msgToDecode").value = "";
    document.getElementById("msgToCode").value = "";
    document.getElementById("shiftNmbr").value = "";
    document.getElementById("shiftNmbrDecode").value = "";
}
document.getElementById("rstrt").addEventListener("click", restrt);
document.getElementById("rstrtDec").addEventListener("click", restrt);


document.getElementById("cipherBegin").addEventListener("click", window.cipher.encode); // SE DEBE LLAMAR EL OBJETO
document.getElementById("decipherBegin").addEventListener("click", window.cipher.decode);