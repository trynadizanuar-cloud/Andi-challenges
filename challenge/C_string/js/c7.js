function replaceText(text, oldText, newText) {
    const regex = new RegExp(oldText, "g");
    const matches = text.match(regex);
    const replacements = matches ? matches.length : 0;
    const result = text.replace(regex, newText);
    
    return { result, replacements, original: text };
}

// Driver code
console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));

