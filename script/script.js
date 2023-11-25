let result = document.querySelector("#result");
let btnResult = document.querySelector("#btnResult");
let charLength = document.querySelector("#charLength");
let charLower = document.querySelector("#charLower");
let charUpper = document.querySelector("#charUpper");
let charNumber = document.querySelector("#charNumber");
let charSymbol = document.querySelector("#charSymbol");
let errormsg = document.querySelector(".errormsg");

charLength.value = 8;
charLower.checked = true;

function generateNumberToChar(minCharCode, maxCharCode) {
    const randomCharCode = Math.floor(Math.random() * (maxCharCode - minCharCode + 1) + minCharCode);
    return String.fromCharCode(randomCharCode);
}

function generateRandomChar(length, charOptions) {
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomCharType = charOptions[Math.floor(Math.random() * charOptions.length)];
        let minCharCode, maxCharCode;

        if (randomCharType === 'lower') {
            minCharCode = 97;
            maxCharCode = 122;
        } else if (randomCharType === 'upper') {
            minCharCode = 65;
            maxCharCode = 90;
        } else if (randomCharType === 'number') {
            minCharCode = 48;
            maxCharCode = 57;
        } else if (randomCharType === 'symbol') {
            minCharCode = 33;
            maxCharCode = 47;
        }

        randomString += generateNumberToChar(minCharCode, maxCharCode);
    }
    return randomString;
}

btnResult.addEventListener("click", () => {
    if (charLength.value >= 8 && charLength.value <= 18) {
        const charOptions = [];
        if (charLower.checked) {
            charOptions.push('lower');
        }
        if (charUpper.checked) {
            charOptions.push('upper');
        }
        if (charNumber.checked) {
            charOptions.push('number');
        }
        if (charSymbol.checked) {
            charOptions.push('symbol');
        }

        if (charOptions.length > 0) {
            result.value = generateRandomChar(charLength.value, charOptions);
            errormsg.innerHTML = '';
        } else {
            errormsg.innerHTML = 'Please select at least one character type.';
        }
    } else {
        errormsg.innerHTML = 'Digit must be in between 8-18';
    }
});




