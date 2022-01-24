const sayHello  = function (name) {
  console.log("Hello, " + name);
}

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}

const returnSayHello  = function (name) {
  return "Hello, " + name;
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
sayHelloToConsole('John'); 
const greeting = returnSayHello('John');
console.log(greeting);