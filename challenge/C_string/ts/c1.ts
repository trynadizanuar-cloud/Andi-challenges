// Tulis function getStringInfo di sini
interface InfoString {
    length: number;
    first: string;
    last: string;
}

type StringFunction = (text: string) => InfoString;

const getStringInfo: StringFunction = (text) => {
    return {
        length: text.length,
        first: text.charAt(0),
        last: text.charAt(text.length - 1)
    };
};

console.log(getStringInfo("Hello"));
console.log(getStringInfo("JavaScript"));
console.log(getStringInfo("A"));

export { }