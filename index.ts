const name = "Rossa";
const age = 24;
const gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you ar ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};