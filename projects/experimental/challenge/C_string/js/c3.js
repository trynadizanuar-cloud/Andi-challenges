function convertCase(text, mode) {
    if (mode === "upper") {
        return text.toUpperCase();
    } else if (mode === "lower") {
        return text.toLowerCase();
    } else if (mode === "title") {
        return text
            .split(" ")
            .map(text => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
            .join(" ");
    } else {
        // Jika mode tidak dikenali, return string asli
        return text;
    }
}

console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));