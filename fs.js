const { writeFileSync, readFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
writeFileSync('./content/third.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });
const third = readFileSync('./content/third.txt', 'utf8');

console.log(first)
console.log(second)
console.log(third)