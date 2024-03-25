const str = prompt("Enter a character");

// let ASCII = str.charCodeAt(2);

let ASCII = str.codePointAt();
document.write(`The ASCII value of ${str} is: ${ASCII}`);