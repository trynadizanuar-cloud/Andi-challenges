interface SearchReturn {
    found: boolean;
    firstindex: number;
    count: number;
}

type SearchFunction = (text: string, searchTerm: string) => SearchReturn;
const searchInText: SearchFunction = (text: string, searchTerm: string) => {

    const found = text.includes(searchTerm);
    const firstindex = text.indexOf(searchTerm);

    let count = 0;
    let index = text.indexOf(searchTerm);
    while (index !== -1) {
        count++
        index = text.indexOf(searchTerm, index + searchTerm.length);
    }

    return {
        found,
        firstindex,
        count,
    }
}

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));

export { }