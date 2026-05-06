type CaseMode = "upper" | "lower" | "title";
type ConvertFunction = (text: string, mode: CaseMode) => string;
const convertCase: ConvertFunction = (text: string, mode: string) => {
    if (mode === "upper") {
        return text.toUpperCase()
    } else if (mode === "lower") {
        return text.toLowerCase()
    } else if (mode === "title") {
        return text
            .split(" ")
            .map(text => text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase())
            .join(" ");
    } else {
        return text
    }
}


console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));

export { }

// type ConvertFunction = (text: string, mode: string) => string;
// const convertCase: ConvertFunction = (text: string, mode: string): string => {
//     if (mode === "upper") return text.toUpperCase()
//     if (mode === "lower") return text.toLowerCase()
//     if (mode === "title") return text.split(" ").map(word => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "").join(" ")
//     return ""
// }
// console.log(convertCase("hello world", "upper"));
// console.log(convertCase("HELLO WORLD", "lower"));
// console.log(convertCase("hello world", "title"));