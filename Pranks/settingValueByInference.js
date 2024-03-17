const a = [1, 2];
const b = a;

b.push(3);
console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3]

// Both constants "a" and "b" are looking for the same memory.
// If you set a new value in constant B should apply on constant A too.
