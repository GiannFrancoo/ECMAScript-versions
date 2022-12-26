// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);


// Object destructuring
let user = { username: 'Gian', age: 24};
let {username , age} = user;
console.log(username, user.age);

// Spread operator
let persona = { name: 'Gian', age: 24};
let country = 'ARG';
let data = { id: 1, ...persona, country };
console.log(data);


// rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

