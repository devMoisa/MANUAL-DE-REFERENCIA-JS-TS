// The typeof null in javascript will be return an Object.
// Why ? I don't have idea. But its necessary have this knowledgement.

const xptoValue = null;
console.log(typeof xptoValue); // object ?????????????????

// How compare if null?
if (typeof xptoValue === "object") {
  console.log("IS NULL!!!");
}
