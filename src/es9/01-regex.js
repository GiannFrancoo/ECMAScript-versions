const regex = /(\d{4})-(\d{2})-(\d{2})/; // Expresión regular

const matchers = regex.exec('1998-08-28');
console.table(matchers);