window.cipher = {
    encode: () => {
        let result = "";
        let shift = Number(document.getElementById("shiftNmbr").value);
        let text = String(document.getElementById("msgToCode").value);

        for (let i = 0; i < text.length; i++) {
            if (text[i] == text[i].toUpperCase()) {
                let a = text[i].charCodeAt(0);
                let e = (((a - 65 + shift) % 26) + 65);
                result = result + String.fromCharCode(e);

            } else if (text[i] == text[i].toLowerCase()) {
                let a = text[i].charCodeAt(0);
                let e = (((a - 97 + shift) % 26) + 97);
                result = result + String.fromCharCode(e);
            } else {
                result = result + text[i];
            }
        }
        document.getElementById("msgToCipherScrn").style.display = "none";
        document.getElementById("cipheredMsgScrn").style.display = "block";
        document.getElementById("transmission").innerHTML = result;
    },

    decode: () => {
        let resultDec = "";
        let shiftDec = document.getElementById("shiftNmbrDec").value;
        let textDec = document.getElementById("msgToDecode").value;
        let shiftDec1 = Number(shiftDec);
        let textDec1 = String(textDec);

        for (let i = 0; i < textDec1.length; i++) {
            if (textDec1[i] == textDec1[i].toUpperCase()) {
                let a = textDec1[i].charCodeAt(0);
                let e = (((a - 65 - shiftDec1) % 26) + 65);
                resultDec = resultDec + String.fromCharCode(e).toUpperCase();
            } else if (textDec1[i] == textDec1[i].toLowerCase()) {
                let a = textDec1[i].charCodeAt(0);
                let e = (((a - 97 - shiftDec1) % 26) + 97);
                resultDec = resultDec + String.fromCharCode(e);
            } else {
                resultDec = resultDec + textDec1[i];
            }
        }
        document.getElementById("msgToDecipherScrn").style.display = "none";
        document.getElementById("decipheredMsgScrn").style.display = "block";
        document.getElementById("transmissionDec").innerHTML = resultDec;
    }

};