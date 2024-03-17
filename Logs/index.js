const value = "Hello World";

console.log("Model 1", value);
console.log("Model 2 " + value);
console.log(`Model 3 ${value}`);

// Typeof is parameter to compare
console.log(typeof value);

// Ex:

if (typeof value === "string") {
  console.log("Is string!");
}
