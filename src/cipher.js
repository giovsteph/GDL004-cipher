window.cipher = {
    encode: (shift, text) => {

        let result = "";
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


        return result
    },

    decode: (shiftDec, textDec) => {
        let resultDec = "";

        for (let i = 0; i < textDec.length; i++) {
            if (textDec[i] == textDec[i].toUpperCase()) {
                let a = textDec[i].charCodeAt(0);
                let e = (((a - 65 + shiftDec) % 26) + 65);
                resultDec = resultDec + String.fromCharCode(e);
            } else if (textDec[i] == textDec[i].toLowerCase()) {
                let a = textDec[i].charCodeAt(0);
                let e = (((a - 97 + shiftDec) % 26) + 97);
                resultDec = resultDec + String.fromCharCode(e);
            } else {
                resultDec = resultDec + textDec[i];
            }
        }
        return resultDec;
    }

};