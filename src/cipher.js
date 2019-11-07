//window.cipher = {
encode /*:*/ = () => {
        document.getElementById("msgToCipherScrn").style.display = "none";
        document.getElementById("cipheredMsgScrn").style.display = "block";
        let result = "";
        let shift = document.getElementById("shiftNmbr").value;
        let text = document.getElementById("msgToCode").value;
        let shift1 = Number(shift);
        let text1 = String(text);

        for (let i = 0; i < text1.length; i++) {
            if (text1[i] == text1[i].toUpperCase()) {
                let a = text1[i].charCodeAt(0);
                let e = (((a - 65 + shift1) % 26) + 65);
                result = result + String.fromCharCode(e).toUpperCase();
            } else if (text1[i] == text1[i].toLowerCase()) {
                let a = text1[i].charCodeAt(0);
                let e = (((a - 97 + shift1) % 26) + 97);
                result = result + String.fromCharCode(e);
            } else {
                result = result + text1[i];
            }
        }
        document.getElementById("transmission").innerHTML = result;
    },

    decode /*:*/ = () => {
        document.getElementById("msgToDecipherScrn").style.display = "none";
        document.getElementById("decipheredMsgScrn").style.display = "block";
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
        document.getElementById("transmissionDec").innerHTML = resultDec;
    }

//};