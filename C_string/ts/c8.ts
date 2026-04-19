interface CleanReturn {
    cleaned: string;
    padded: string;
    lenght: number;
}

type CleanedFunction = (text: string, width: number) => CleanReturn;
const cleanAndFormat: CleanedFunction = (text: string, width: number): CleanReturn => {

    let cleaned = text.trim().replace(/\s+/g, " ");

    let totalpadded = width - cleaned.length;
    let leftpadded = Math.floor(totalpadded / 2);
    let rightpadded = totalpadded - leftpadded;

    let padded = cleaned
        .padStart(cleaned.length + leftpadded, " ")
        .padEnd(width, " ");

    return {
        cleaned,
        padded,
        lenght: width
    }

}

console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));

export { }