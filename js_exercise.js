// Question 1

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let result = 0
for (let name in salaries) {
    result += salaries[name];
}
console.log(result);

// Question 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
}

// Question 3
function checkEmailId(str) {
    let atSymbol = str.indexOf("@", 0);
    if (atSymbol > 0) {
        let dot = str.indexOf(".",atSymbol);
        if (dot > -1) {
            return true;
        }
    }
    return false;
}

// Question 4
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0,19) + "…";
    }
    return str;
}

// Question 5
function arrayThing() {
    let arr = ["James", "Brennie"];
    console.log(arr);
    arr.push("Robert");
    console.log(arr);
    arr[Math.floor(arr.length / 2) + 1] = "Calvin";
    console.log(arr);
    arr.shift();
    console.log(arr);
    arr.unshift("Rose", "Regal");
    console.log(arr);
}