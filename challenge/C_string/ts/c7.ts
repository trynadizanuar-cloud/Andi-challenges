interface ReplaceReturn {
    result: string,
    replacements: number,
    original: string,
}
type ReplaceFunction = (text: string, oldText: string, newText: string) => ReplaceReturn;
const replaceText: ReplaceFunction = (text: string, oldText: string, newText: string): ReplaceReturn => {

    const regex = new RegExp(oldText, "g");
    const matches = text.match(regex);
    const replacements = matches ? matches.length : 0;
    const result = text.replace(regex, newText);

    return {
        result,
        replacements,
        original: text,
    }
}

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));

export { }