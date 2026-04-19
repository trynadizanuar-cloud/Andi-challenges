// Tulis function searchInText di sini
function searchInText(text, searchTerm) {


    let found = text.includes(searchTerm);

    let firstIndex = text.indexOf(searchTerm);

    let count = 0;
    let index = text.indexOf(searchTerm);

    while (index !== -1) {
        count++;
        index = text.indexOf(searchTerm, index + searchTerm.length);
    }

    return {
        found,
        firstIndex,
        count,
    }
}

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));