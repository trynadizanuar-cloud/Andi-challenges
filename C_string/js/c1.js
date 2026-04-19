// Tulis function getStringInfo di sini
function getStringInfo(text) {
    return {
        length: text.length,
        first: text.charAt(0),
        last: text.charAt(text.length - 1)
    }
}
console.log(getStringInfo("Hello"));
console.log(getStringInfo("JavaScript"));
console.log(getStringInfo("A"));