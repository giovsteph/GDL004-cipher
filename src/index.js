//OBTENCION DE DATOS 
const obtencionData = () => {
    document.getElementById("msgToCipherScrn").style.display = "none";
    document.getElementById("cipheredMsgScrn").style.display = "block";
}
document.getElementById("cipherBegin").addEventListener("click", obtencionData);

const obtencionDataDec = () => {
    document.getElementById("msgToDecipherScrn").style.display = "none";
    document.getElementById("decipheredMsgScrn").style.display = "block";
}
document.getElementById("decipherBegin").addEventListener("click", obtencionDataDec);


//Click para funciones
//ENCODE
const funciones = () => {
    let shift1 = document.getElementById("shiftNmbr").value;
    let text1 = document.getElementById("msgToCode").value;
    let shift = Number(shift1);
    let text = String(text1);

    const result = window.cipher.encode(shift, text);
    document.getElementById("transmission").innerHTML = result;

}
document.getElementById("cipherBegin").addEventListener("click", funciones);

const funcionesDec = () => {
    let shiftDec1 = document.getElementById("shiftNmbrDec").value;
    let textDec1 = document.getElementById("msgToDecode").value;
    let shiftDec = Number(shiftDec1);
    let textDec = String(textDec1);

    const resultDec = window.cipher.decode(shiftDec, textDec);
    document.getElementById("transmissionDec").innerHTML = resultDec;

}
document.getElementById("decipherBegin").addEventListener("click", funcionesDec);



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
//Click Restart
document.getElementById("rstrt").addEventListener("click", restrt);
document.getElementById("rstrtDec").addEventListener("click", restrt);