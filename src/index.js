//OBTENCION DE DATOS



//FUNCIONES PARA MOSTRAR Y OCULTAR

const strtGame = () => {
    document.getElementById("strtScrn").style.display = "none";
    document.getElementById("selectionScrn").style.display = "block";
}
const beginCipher = () => {

    document.getElementById("selectionScrn").style.display = "none";
    document.getElementById("cipherScrn").style.display = "block";
}
const continueToMsgCipherInput = () => {
    document.getElementById("cipherScrn").style.display = "none";
    document.getElementById("msgToCipherScrn").style.display = "block";
}
const beginDecipher = () => {
    document.getElementById("selectionScrn").style.display = "none";
    document.getElementById("decipherScrn").style.display = "block";
}
const continueToMsgDecipherInput = () => {
    document.getElementById("decipherScrn").style.display = "none";
    document.getElementById("msgToDecipherScrn").style.display = "block";
}
const restrt = () => {
    document.getElementById("cipheredMsgScrn").style.display = "none";
    document.getElementById("decipheredMsgScrn").style.display = "none";
    document.getElementById("strtScrn").style.display = "block";
    document.getElementById("msgToDecode").value = "";
    document.getElementById("msgToCode").value = "";
}

//FUNCIONES DE CLICKS

document.getElementById("strtBtn").addEventListener("click", strtGame);
document.getElementById("strtCipher").addEventListener("click", beginCipher);
document.getElementById("continueToMsgInput").addEventListener("click", continueToMsgCipherInput);
document.getElementById("strtDecipher").addEventListener("click", beginDecipher);
document.getElementById("continueToMsgInputDec").addEventListener("click", continueToMsgDecipherInput);
document.getElementById("cipherBegin").addEventListener("click", window.cipher.encode); // SE DEBE LLAMAR EL OBJETO
document.getElementById("decipherBegin").addEventListener("click", window.cipher.decode);
document.getElementById("rstrt").addEventListener("click", restrt);
document.getElementById("rstrtDec").addEventListener("click", restrt);