const submitBtn = document.querySelector("#submit-btn");
const tableBody = document.querySelector("#cipher-res-table-body");

submitBtn.addEventListener("click", initalizeDecryption);

const numbersAlph = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
    26: "a",
    27: "b",
    28: "c",
    29: "d",
    30: "e",
    31: "f",
    32: "g",
    33: "h",
    34: "i",
    35: "j",
    36: "k",
    37: "l",
    38: "m",
    39: "n",
    40: "o",
    41: "p",
    42: "q",
    43: "r",
    44: "s",
    45: "t",
    46: "u",
    47: "v",
    48: "w",
    49: "x",
    50: "y",
    51: "z"
}


function initalizeDecryption() {
    tableBody.innerHTML = "";
    const cipher = document.querySelector("#cipher-input").value.toLowerCase();
    let shifted = 0;
    let latestCipher = cipher;

    while (shifted < 26) {
        latestCipher = delegateTasks(latestCipher)
        let latestCipherStr = latestCipher.join("")
        populateTable(latestCipherStr, shifted);
        shifted++;
    }

    document.querySelector("#result-div").style.visibility = "visible";
}


function delegateTasks(cipher) {    
    const mappedCipher = mapCipherToNums(cipher);    
    const shiftedCipher = shiftOne(mappedCipher)
    let decryptedCipher = mapNumsToCipher(shiftedCipher);
    return decryptedCipher;
}


function mapCipherToNums(cipher) {
   let cipherToNums = [];
    for (let x of cipher) {
        let num = findNumberFromChar(x);
        cipherToNums.push(num);
    }
    return cipherToNums
}

function findNumberFromChar(char) {
    let augh = Object.keys(numbersAlph).find(key => numbersAlph[key] === char);
    return Number(augh);
}


function mapNumsToCipher(cipher) {
    const numsToCipher = []
    for (let x of cipher) {
        let char = numbersAlph[x]
        numsToCipher.push(char)
    }
    return numsToCipher;
}


function shiftOne(cipher) {
    let shiftedCipher = cipher.map(num => num + 1);
    return shiftedCipher;
}


function populateTable(cipher, shift) {
    let tr = document.createElement("tr");

    let tdCipher = document.createElement("td");
    let tdArrow = document.createElement("td");
    let tdShift = document.createElement("td");

    let textCipher = document.createTextNode(cipher);
    let textArrow = document.createTextNode("→");
    let textShift = document.createTextNode(shift + 1);

    tdCipher.appendChild(textCipher);
    tdArrow.appendChild(textArrow);
    tdShift.appendChild(textShift);
    
    tr.appendChild(tdCipher);
    tr.appendChild(tdArrow);
    tr.appendChild(tdShift);
    
    tableBody.appendChild(tr);
    return;
}