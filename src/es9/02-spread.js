const user = { username: 'Gian', age: 24, country: 'Argentina' };
const { username, ...values } = user;
console.log(username);
console.log(values);