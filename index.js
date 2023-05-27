const stringLength = (str) => {

    let strLength = str.length;

    if (strLength > 0 && strLength < 11) {
        return strLength;
    } else {
        throw new Error("String should not be empty or exceeded max length = 10");
    }

}


const reverseString = (str)=>{
    return str.split("").reverse().join("");
}

const capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { stringLength,reverseString,capitalize };