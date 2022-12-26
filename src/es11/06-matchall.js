const regex = /\b(Palabra)+\b/g; // Palabra dentro de un string

const fruit = 'Apple, palabra, Palabra, texto muy largo pero tiene Palabra';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}